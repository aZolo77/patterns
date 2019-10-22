const ConsoleStrategy = require('./console-strategy');
const FileStrategy = require('./file-strategy');

function createStrategy(type) {
  switch (type) {
    case 'console':
      return new ConsoleStrategy();
      break;
    case 'file':
      return new FileStrategy('log.txt');
      break;
  }
}

module.exports = createStrategy;
