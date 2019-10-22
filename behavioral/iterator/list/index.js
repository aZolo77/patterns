const List = require('./list');

const list = new List();

list.add(1);
list.add(2);
list.add(3);

// цикл по умолчанию ищет в объекте свойство-метод [Symbol.iterator]()
for (let item of list) {
  console.log(item);
}

console.log(...list);

console.log(Array.from(list));
