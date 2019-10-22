// Принцип работы Декоратора на простом примере - это добавление функционала объекту, путём обёртки этого объекта с сохранением начальной конфигурации данного объекта

// =============================================================================================================
// = simple object
const drink = 'coffee';

// = decorators
function sugar(drink) {
  return `${drink} + sugar`;
}

function milk(drink) {
  return `${drink} + milk`;
}

// realization
console.log(drink);

// wrappers
console.log(sugar(drink));
console.log(milk(drink));

console.log(sugar(milk(drink)));
