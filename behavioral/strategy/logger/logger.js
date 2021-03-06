// Вместо создания большого кол-ва методов или наследования, можно создать паттерн Стратегия, который определяет семейство схожих алгоритмов и помещает каждый из них в собственный класс, после чего алгоритмы можно взаимозаменять прямо во время исполнения программы

// ==============================================================================================================
class Logger {
  constructor() {
    this.strategy = null;
  }

  log(val) {
    return this.strategy.execute(val);
  }
}

module.exports = Logger;
