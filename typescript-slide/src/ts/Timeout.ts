export default class Timeout {
  id: number;
  handler: TimerHandler;

  constructor(handler: TimerHandler, time: number) {
    // para esse id, passamos o id do setTimeout que estamos criando
    this.id = setTimeout(handler, time);
    this.handler = handler;
  }

  clear() {
    clearTimeout(this.id);
  }
}
