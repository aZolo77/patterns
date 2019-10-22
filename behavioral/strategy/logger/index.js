// realization
const Logger = require('./logger');
const createStrategy = require('./strategy-factory');

const logger = new Logger();

// передаём стратегию и с помощью паттерна "Фабрика" выбираем нужную
// таким образом можно скрыть алгоритм выполнения от самого объекта
logger.strategy = createStrategy('console');

logger.log('hello world');
