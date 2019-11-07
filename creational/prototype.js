// * Паттерн Прототип - позволяет копировать (клонировать) объекты (сохраняя состояние), не вдаваясь в подробности их реализации вместо создания объекта с новыми свойствами

// - 1
{
  const car = {
    wheels: 4,
    init() {
      console.log(`I have ${this.wheels} wheels, my owner is ${this.owner}`);
    }
  };

  const carWithOwner = Object.create(car, {
    owner: {
      value: 'Zollo'
    }
  });

  carWithOwner.init();

  console.log(carWithOwner.__proto__ === car); // true
}
