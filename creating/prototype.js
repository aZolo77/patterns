// Паттерн Прототип - позволяет копировать (клонировать) объекты (сохраняя состояние), не вдаваясь в подробности их реализации вместо создания объекта с новыми свойствами

// =============================================================================================================
// = 1st example

class Person {
  constructor(config) {
    this.skinColor = config.skinColor;
    this.hairColor = config.hairColor;
    this.height = config.height;
    this.weight = config.weight;
    this.gender = config.gender;
  }

  clone() {
    // копирует все свойства данного объекта в новый пустой объект (не глубокое копирование)
    return new Person(Object.assign({}, this));
  }
}

// = realization
const Alex = new Person({
  skinColor: 'white',
  hairColor: 'brown',
  height: 188,
  weight: 80,
  gender: 'mail'
});

const John = Alex.clone();
John.height = 178;

// =====================================
// = 2nd example
const div = document.createElement('div');
div.className = 'box';

const divCopy = div.cloneNode(true);
