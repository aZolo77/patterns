// Команда превращает запросы в объекты, позволяя передавать их как аргументы при вызове методов, ставить запросы в очередь, логировать их, а также поддерживать отмену операций.

// ================================================================================================================

class LightCommand {
  constructor(light) {
    this.light = light;
  }

  executeOn() {
    this.light.on();
  }

  executeOff() {
    this.light.off();
  }
}

module.exports = LightCommand;
