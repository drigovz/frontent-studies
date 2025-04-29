export default class Timeout {
    id;
    handler;
    constructor(handler, time) {
        // para esse id, passamos o id do setTimeout que estamos criando
        this.id = setTimeout(handler, time);
        this.handler = handler;
    }
    clear() {
        clearTimeout(this.id);
    }
}
//# sourceMappingURL=Timeout.js.map