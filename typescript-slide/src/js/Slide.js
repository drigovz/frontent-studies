export default class Slide {
    container;
    slides;
    controls;
    time;
    index;
    slideActive;
    constructor(container, slides, controls, time = 5000) {
        this.container = container;
        this.slides = slides;
        this.controls = controls;
        this.time = time;
        // inicia o índice e o slide atualmente ativo como o zero
        this.index = 0;
        this.slideActive = this.slides[this.index];
        this.show(this.index);
    }
    hide(slide) {
        slide.classList.remove("active");
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
    }
}
//# sourceMappingURL=Slide.js.map