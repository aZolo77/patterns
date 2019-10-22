const { Paragraph, List, ListItem } = require('./elements');
const ElementHtmlVisitor = require('./visitor');

const p = new Paragraph('RGB colors');

const red = new ListItem('RED');
const green = new ListItem('GREEN');
const blue = new ListItem('BLUE');

const ul = new List(red, green, blue);

const document = [p, ul];

const visitor = new ElementHtmlVisitor();

// в каждый класс передаём Посетителя
for (let element of document) {
  element.accept(visitor);
}

// Visitor собирает все результаты из разных классов в одно свойство
console.log(visitor.result);
