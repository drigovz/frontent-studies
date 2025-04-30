export default class Timeout {
    id;
    handler;
    startTime;
    timeLeft;
    constructor(handler, time) {
        // para esse id, passamos o id do setTimeout que estamos criando
        this.id = setTimeout(handler, time);
        this.handler = handler;
        // essa propriedade pega a hora exata em que o slide começou
        this.startTime = Date.now();
        this.timeLeft = time;
    }
    clear() {
        clearTimeout(this.id);
    }
    pause() {
        // aqui calulamos a diferença entre a data em que pausamos o slide - a data em que o slide iniciou
        const passedTime = Date.now() - this.startTime;
        // aqui calculamos o quanto o slide tem de tempo restante
        // que é o tempo que já passou (passedTime) - o tempo total do slide (time)
        this.timeLeft -= passedTime;
        // devemos sempre limpar o setTimeout anterior
        this.clear();
    }
    continue() {
        this.clear();
        // no continue nós teremos o tempo que falta timeLeft
        this.id = setTimeout(this.handler, this.timeLeft);
        // e devemos também definir uma nova data de início
        // isso pq a cada vez que nós pausarmos, nós devemos calcular novamente
        // a partir de um novo início
        this.startTime = Date.now();
    }
}
//# sourceMappingURL=Timeout.js.map