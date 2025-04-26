import Slide from "./Slide.js";

const container = document.querySelector<HTMLElement>("#slide");
const elements = document.querySelector<HTMLElement>("#slide-elements");
const controls = document.querySelector<HTMLElement>("#controls");

// pega todos os elementos filhos do elemento 'elements'
// const elementChildren = elements?.children;

// elements.children.length -> é a mesma coisa que elements.children.length < 0
if (container && elements && controls && elements.children.length) {
  const slide = new Slide(
    container,
    /* transforma o elemento em array */
    Array.from(elements.children),
    controls
  );
}
