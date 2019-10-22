// "наблюдаемый Субъект" собирает всех наблюдателей, а затем перебирая их
class Subject {
  constructor() {
    this.events = {};
    // {
    //     click: [fn1, fn2, fn3],
    //     load: [fn1, fn2, fn3]
    // }
  }

  on(event, listener) {
    this.events[event] = this.events[event] || new Set();
    this.events[event].add(listener);
  }

  off(event, listener) {
    if (this.events[event].has(listener)) {
      this.events[event].delete(listener);
    }
  }

  emit(event, ...args) {
    for (let listener of this.events[event]) {
      // у всех слушателей должен быть метод update
      listener.update(...args);
    }
  }
}

module.exports = Subject;
