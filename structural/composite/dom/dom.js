// возвращает коллецию всех найденных элементов
export default class Dom {
  static get(selector) {
    const elements = document.querySelectorAll(selector);

    return new ElementCollection(...elements);
  }
}

class ElementCollection {
  constructor(...elements) {
    this.elements = elements;
  }

  addClass(className) {
    for (let element of this.elements) {
      element.classList.add(className);
    }

    return this;
  }

  removeClass(className) {
    for (let element of this.elements) {
      element.classList.remove(className);
    }

    return this;
  }

  addEventHandler(event, handler) {
    for (const element of this.elements) {
      element.addEventListener(event, handler);
    }

    return this;
  }

  removeEventHandler(event, handler) {
    for (const element of this.elements) {
      element.removeEventListener(event, handler);
    }

    return this;
  }
}
