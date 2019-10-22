// секундомер
class Stopwatch {
  constructor(onTick = Function.prototype) {
    // истекшее количество секунд
    this.elapsed = 0;
    this.interval = null;
    this.onTick = onTick;

    this.tick = this.tick.bind(this);
  }

  tick() {
    this.elapsed += 1;
    // Наблюдатель получает колво секунд
    this.onTick(this.elapsed);
  }

  start() {
    this.interval = setInterval(this.tick, 1000);
  }

  pause() {
    clearInterval(this.interval);
    this.interval = null;
  }

  stop() {
    this.pause();
    this.elapsed = 0;
  }
}
