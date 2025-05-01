import Timeout from "./Timeout.js";

export default class Slide {
  private container: Element;
  private slides: Element[];
  private controls: Element;
  private time: number;
  private index: number;
  public slideActive: Element;
  private timeout: Timeout | null;
  private pausedTimeout: Timeout | null;
  private paused: boolean;

  constructor(
    container: Element,
    slides: Element[],
    controls: Element,
    time: number = 5000
  ) {
    this.container = container;
    this.slides = slides;
    this.controls = controls;
    this.time = time;

    // pegamos o slide atual do localStorage
    this.index = localStorage.getItem("activeSlide")
      ? Number(localStorage.getItem("activeSlide"))
      : 0;
    this.slideActive = this.slides[this.index];

    this.timeout = null;
    this.pausedTimeout = null;
    this.paused = false;

    this.show(this.index);
    this.init();
  }

  private hide(slide: Element) {
    slide.classList.remove("active");

    if (slide instanceof HTMLVideoElement) {
      // se for video, devemos pausar o video
      // e retroceder o tempo dele para o zero, para quando voltarmos
      // no slide do video, o video iniciar do zero
      slide.currentTime = 0;
      slide.pause();
    }
  }

  // método para passar de um slide para outro automaticamente
  private auto(time: number): void {
    //sempre antes de iniciarmos um novo timeout, limpamos o anterior
    this.timeout?.clear();
    this.timeout = new Timeout(() => this.next(), time);
  }

  private autoplay(video: HTMLVideoElement): void {
    // por questão de acessibilidade, não devemos deixar o vídeo com audio em autoplay
    video.muted = true;
    // autoplay do video
    video.play();

    // essa variável irá controlar se é a primeira vez que o video está reproduzindo ou não
    // isso é necessário para que o duration do video não seja alterado toda a vez que pausarmos o video
    let firstPaly = true;

    // só vamos calcular o tempo de duração de video
    // se ele estiver tocando/reproduzindo
    video.addEventListener("playing", () => {
      // o slide do vídeo deve ficar aparecendo todo o tempo do vídeo
      // para isso, devemos definir o tempo de duração desse slide como
      // o tempo de duração do vídeo, e pra transformar em milissagundos, multiplicamos por 1000
      if (firstPaly) this.auto(video.duration * 1000);

      firstPaly = false;
    });
  }

  // método que exibe o slide
  show(index: number) {
    // qual o índice do slide que está ativo no momento
    this.index = index;
    // qual o slide que está ativo no momento
    this.slideActive = this.slides[index];
    // primeiro removemos a class active de todos os slides
    this.slides.forEach((slide) => this.hide(slide));
    // depois ativamos somente no elemento cujo index foi passado por parametro
    this.slideActive.classList.add("active");

    // salvamos no localStorage o slide atual para quando a página atualizar
    // a reprodução do slide seguir de onde parou
    localStorage.setItem("activeSlide", String(this.index));

    // como o vídeo terá um tempo de execução diferente dos das imagens
    // devemos realizar essa verificação
    if (this.slideActive instanceof HTMLVideoElement) {
      this.autoplay(this.slideActive);
    } else {
      this.auto(this.time);
    }
  }

  private prev() {
    // se tiver pausado, não executa a função
    if (this.paused) return;

    const prevSlideItem =
      this.index > 0 ? this.index - 1 : this.slides.length - 1;
    this.show(prevSlideItem);
  }

  private next() {
    if (this.paused) return;

    // this.index + 1 -> pq o array começa no zero
    // calculamos se o índice atual é menor que o total de itens no slide
    // se for, ele seta como o proximo item do slide somado com 1
    // se for maior, ele retorna pro zero
    const nextSlideItem =
      this.index + 1 < this.slides.length ? this.index + 1 : 0;
    this.show(nextSlideItem);
  }

  private pause(): void {
    // timeout só ativar a pausa no slide após 300 ms
    // isso pq assim, teremos a certeza de que a pessoa está pausando realmente
    // e não apenas clicando para ir para o próximo slide.
    this.pausedTimeout = new Timeout(() => {
      this.paused = true;

      // se o slide atual for um video, devemos pausar o mesmo
      if (this.slideActive instanceof HTMLVideoElement)
        this.slideActive.pause();
    }, 300);
  }

  private continue(): void {
    // para continuar, devemos limpar o pausedTimeout
    this.pausedTimeout?.clear();

    if (this.paused) {
      this.paused = false;
      // devemos chamar novamente o auto para continuar a execução do slide assim que a pessoa soltar o pointer
      this.timeout?.continue();

      // se o slide atual for um video, devemos continuar o mesmo
      if (this.slideActive instanceof HTMLVideoElement) this.slideActive.play();
    }
  }

  private addControls() {
    // cria os botões - next e prev
    const prevBtn = document.createElement("button");
    prevBtn.innerText = "Prev";
    const nextBtn = document.createElement("button");
    nextBtn.innerText = "Next";
    this.controls.appendChild(prevBtn);
    this.controls.appendChild(nextBtn);

    // adicionando o evento de pointerdown para pausar o slide
    this.controls.addEventListener("pointerdown", () => this.pause());
    this.controls.addEventListener("pointerup", () => this.continue());

    // pointerup -> evento que ativa somente quando a pessoa solta o dedo ou o ponteiro do elemento
    nextBtn.addEventListener("pointerup", () => this.prev());
    prevBtn.addEventListener("pointerup", () => this.next());
  }

  private init() {
    this.addControls();
    this.show(this.index);
  }
}
