// Фасад предоставляет простой интерфейс для работы со сложной подсистемой, содержащей множество классов и методов

//======================================================================================================
// способы добаления/удаления события на элементе в зависимости от браузера
function addEvent(element, event, handler) {
  if (element.addEventListener) {
    element.addEventListener(event, handler, false);
  } else if (element.attachEvent) {
    element.attachEvent(`on${event}`, handler);
  } else {
    element[`on${event}`] = handler;
  }
}

function removeEvent(element, event, handler) {
  if (element.removeEventListener) {
    element.removeEventListener(event, handler, false);
  } else if (element.detachEvent) {
    element.detachEvent(`on${event}`, handler);
  } else {
    element[`on${event}`] = null;
  }
}

// Фасад для создания canvas и отрисовки разных фигур
class Canvas {
  constructor(element) {
    this.element = element;
    this.context = element.getContext('2d');
  }

  drawRect(x, y, rect) {
    this.context.fillRect(x, y, rect.width, rect.height);
  }

  drawLine() {}
  drawCircle() {}
}
