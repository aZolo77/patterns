// На каждое возможное состояние объекта создаётся отдельный класс-Состояние

// ===============================================================
class State {
  constructor(player) {
    this.player = player;
  }

  on() {}

  play() {}

  pause() {}

  off() {}
}

// Включенное состояние (можно нажать play или off)
class OnState extends State {
  play() {
    this.player.state = this.player.playingState;
  }

  off() {
    this.player.state = this.player.offState;
  }
}

// Из выключенного состояния можно перейти только во Включенное
class OffState extends State {
  on() {
    this.player.state = this.player.onState;
  }
}

// Из Вклченного состояния переходим в Выключенное или Паузу
class PlayingState extends State {
  pause() {
    this.player.state = this.player.pauseState;
  }

  off() {
    this.player.state = this.player.offState;
  }
}

// Из Паузы переходим во Включенное или Выключаем
class PauseState extends State {
  play() {
    this.player.state = this.player.playingState;
  }

  off() {
    this.player.state = this.player.offState;
  }
}

class Player {
  constructor() {
    this.onState = new OnState(this);
    this.offState = new OffState(this);
    this.playingState = new PlayingState(this);
    this.pauseState = new PauseState(this);

    // начальное состояние
    this.state = new OffState(this);
  }

  // вызываем методы из самих классов состояний
  on() {
    this.state.on();
  }

  play() {
    this.state.play();
  }

  pause() {
    this.state.pause();
  }

  off() {
    this.state.off();
  }
}

module.exports = Player;
