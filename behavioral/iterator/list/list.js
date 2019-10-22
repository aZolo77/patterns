// объект итератора
class ListIterator {
  constructor(list) {
    this.list = list;
    this.currentIndex = 0;
  }

  next() {
    // текущее значение, завершён ли перебор
    let result = { value: undefined, done: true };

    if (this.currentIndex < this.list.size) {
      result.value = this.list.get(this.currentIndex);
      result.done = false;
      this.currentIndex++;
    }

    return result;
  }
}

// итерируемый объект
class List {
  constructor() {
    this.items = {};
  }

  get size() {
    // возвращает длину массива ключей объекта
    return Object.keys(this.items).length;
  }

  add(item) {
    // добавляем новый элемент в объект items
    this.items[this.size] = item;
  }

  get(index) {
    // получение элемента по индексу
    return this.items[index];
  }

  // перебирающий метод
  [Symbol.iterator]() {
    return new ListIterator(this);
  }
}

module.exports = List;
