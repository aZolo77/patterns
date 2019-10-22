class Switch {
  constructor(command) {
    this.command = command;
  }

  on() {
    this.command.executeOn();
  }

  off() {
    this.command.executeOff();
  }
}

module.exports = Switch;
