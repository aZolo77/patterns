// Класс Команды позволяет сохранять состояние вызываемых событий

// ==============================================================
class StopwatchCommand {
  constructor(stopwatch) {
    // доступ к управляемому объекту (секундомеру)
    this.stopwatch = stopwatch;
    // для хранения предыдущих состояний
    this.changes = [];
  }
}

class StartStopwatchCommand extends StopwatchCommand {
  execute() {
    // указываем команду
    this.stopwatch.start();
  }
}

class PauseStopwatchCommand extends StopwatchCommand {
  execute() {
    // указываем команду
    this.stopwatch.pause();
  }
}

class StopStopwatchCommand extends StopwatchCommand {
  execute() {
    // указываем команду
    this.stopwatch.stop();
  }
}
