const Light = require('./light');
const Switch = require('./switch');
// = Command Class
const LightCommand = require('./light-command');

// методы "Лмпочки" вызываются в "Переключателе" через интерфейс "Команды"
const light = new Light();
const lightCommand = new LightCommand(light);
const lightSwitch = new Switch(lightCommand);

lightSwitch.on();
lightSwitch.on();
lightSwitch.off();
