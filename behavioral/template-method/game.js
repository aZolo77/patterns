// Шаблонный метод определяет скелет алгоритма, перекладывая ответственность за некоторые его шаги на подклассы
// Паттерн позволяет подклассам переопределять шаги алгоритма, не меняя его общей структуры

// ============================================================================================================
// В родительском классе прописана логика (абстрактный класс)
class Game {
  constructor(numberOfPlayers) {
    this.numberOfPlayers = numberOfPlayers;
  }

  start() {}

  haveWinner() {}

  takeTurn() {}

  end() {}

  // основной алгоритм без реализации
  run() {
    this.start();

    while (!this.haveWinner()) {
      this.takeTurn();
    }

    this.end();
  }
}

// Класс потомок определяет реализацию для Шаблонного-Родительского класса
class TicTacToe extends Game {
  start() {}

  haveWinner() {}

  takeTurn() {}

  end() {}
}

const ticTacToe = new TicTacToe(2);
ticTacToe.run();
