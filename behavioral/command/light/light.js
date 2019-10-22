// чистая логика работы лампочки

class Light {
  constructor() {
    this.isOn = false;
  }

  on() {
    this.isOn = true;
    console.log('On');
  }

  off() {
    this.isOn = false;
    console.log('Off');
  }
}

module.exports = Light;
