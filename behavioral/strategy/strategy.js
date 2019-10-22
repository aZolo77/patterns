/* Объект, метод которого меняет поведение в зависимости от переданной стратегии, при этом не изменяя интерфейс метода [= Пример "Метод сортировки" =] */

// = Exact Object
const module = (function() {
  let strategy = {};

  return {
    exec: function() {
      // call strategy method
      strategy.exec();
    },
    setStrategy: function(s) {
      // change strategy
      strategy = s;
    }
  };
})();

// = Strategy 'constructor'
function Strategy() {}
Strategy.prototype.exec = function() {};

// = Strategy_1
function Strategy_1() {}
// inherit
Strategy_1.prototype = Object.create(Strategy.prototype);
Strategy_1.prototype.exec = function() {
  console.log('Одно поведение');
};

// = Strategy_2
function Strategy_2() {}
// inherit
Strategy_2.prototype = Object.create(Strategy.prototype);
Strategy_2.prototype.exec = function() {
  console.log('Другое поведение');
};

// set first Strategy
module.setStrategy(new Strategy_1());
// executing Object method
module.exec();

// set second Strategy
module.setStrategy(new Strategy_2());
// executing Object method
module.exec();
