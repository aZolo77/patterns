// Компоновщик позволяет сгруппировать множество объектов в древовидную структуру, а затем работать с ней так, как будто это единичный объект.

// ===============================================================================================================
const Menu = require('./menu');
const MenuItem = require('./menu-item');

const mainMenu = new Menu('Design Patterns');

const creationalMenu = new Menu('Creational');
const structuralMenu = new Menu('Structural');
const behavioralMenu = new Menu('Behavioral');

creationalMenu
  .add(new MenuItem('Singleton'))
  .add(new MenuItem('Factory'))
  .add(new MenuItem('Builder'));

structuralMenu
  .add(new MenuItem('Adapter'))
  .add(new MenuItem('Bridge'))
  .add(new MenuItem('Composite'));

behavioralMenu
  .add(new MenuItem('Observer'))
  .add(new MenuItem('Mediator'))
  .add(new MenuItem('Strategy'));

mainMenu
  .add(creationalMenu)
  .add(structuralMenu)
  .add(behavioralMenu);

// вызывает render у всех своих детей, только у каждого из них он срабатывает по-разному
mainMenu.render();
