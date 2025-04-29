import Timeout from "./Timeout.js";
export default class Slide {
    container;
    slides;
    controls;
    time;
    index;
    slideActive;
    timeout;
    constructor(container, slides, controls, time = 5000) {
        this.container = container;
        this.slides = slides;
        this.controls = controls;
        this.time = time;
        // inicia o índice e o slide atualmente ativo como o zero
        this.index = 0;
        this.slideActive = this.slides[this.index];
        this.timeout = null;
        this.show(this.index);
        this.init();
    }
    hide(slide) {
        slide.classList.remove("active");
    }
    // método para passar de um slide para outro automaticamente
    auto(time) {
        //sempre antes de iniciarmos um novo timeout, limpamos o anterior
        this.timeout?.clear();
        this.timeout = new Timeout(() => this.next(), time);
    }
    // método que exibe o slide
    show(index) {
        // qual o índice do slide que está ativo no momento
        this.index = index;
        // qual o slide que está ativo no momento
        this.slideActive = this.slides[index];
        // primeiro removemos a class active de todos os slides
        this.slides.forEach((slide) => this.hide(slide));
        // depois ativamos somente no elemento cujo index foi passado por parametro
        this.slideActive.classList.add("active");
        this.auto(this.time);
    }
    prev() {
        const prevSlideItem = this.index > 0 ? this.index - 1 : this.slides.length - 1;
        this.show(prevSlideItem);
    }
    next() {
        // this.index + 1 -> pq o array começa no zero
        // calculamos se o índice atual é menor que o total de itens no slide
        // se for, ele seta como o proximo item do slide somado com 1
        // se for maior, ele retorna pro zero
        const nextSlideItem = this.index + 1 < this.slides.length ? this.index + 1 : 0;
        this.show(nextSlideItem);
    }
    addControls() {
        // cria os botões - next e prev
        const prevBtn = document.createElement("button");
        prevBtn.innerText = "Prev";
        const nextBtn = document.createElement("button");
        nextBtn.innerText = "Next";
        this.controls.appendChild(prevBtn);
        this.controls.appendChild(nextBtn);
        // pointerup -> evento que ativa somente quando a pessoa solta o dedo ou o ponteiro do elemento
        nextBtn.addEventListener("pointerup", () => this.prev());
        prevBtn.addEventListener("pointerup", () => this.next());
    }
    init() {
        this.addControls();
        this.show(this.index);
    }
}
//# sourceMappingURL=Slide.js.map