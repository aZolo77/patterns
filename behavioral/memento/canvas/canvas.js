// Memento упрощает структуру обслуживаемого объекта, поскольку ему не нужно хранить в себе всю историю версий своего состояний

// ==================================================================================================================
class Canvas {
  constructor(element) {
    this.element = element;
    this.context = element.getContext('2d');
    this.shapes = [];
  }

  drawRect(x, y, rect) {
    this.context.fillRect(x, y, rect.width, rect.height);
    this.shapes.push({ x, y, shape: rect });
  }

  clear() {
    this.context.clearRect(0, 0, 1280, 720);
    this.shapes = [];
  }

  createMemento() {
    return new Canvas.Memento([...this.shapes]);
  }

  // обнулить состояние и вывести все нарисованные формы из массива форм shapes
  setState(memento) {
    this.clear();

    for (let { x, y, shape: rect } of memento.state) {
      this.drawRect(x, y, rect);
    }
  }
}

Canvas.Memento = class {
  constructor(...shapes) {
    this.state = shapes;
  }
};
