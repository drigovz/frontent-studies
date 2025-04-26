export default class Slide {
  private container: Element;
  private elements: Element[];
  private controls: Element;
  private time: number;

  constructor(
    container: Element,
    elements: Element[],
    controls: Element,
    time: number = 5000
  ) {
    this.container = container;
    this.elements = elements;
    this.controls = controls;
    this.time = time;
  }
}
