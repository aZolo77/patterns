// Фабрика Фабрик - создаёт в себе экземпляры других фабрик (используется при большой иерархии создаваемых объектов)
// =================================================================================================================

// = 1st example

// Super Factory
class DrinkFactory {
  static createFactory(type) {
    switch (type) {
      case 'coffee':
        return new CoffeeFactory();
        break;
      case 'tea':
        return new TeaFactory();
        break;
    }
  }
  createDrink() {}
}

// Simple Factories
class CoffeeFactory extends DrinkFactory {
  createDrink(type) {
    switch (type) {
      case 'espresso':
        return new Espresso();
        break;
      case 'americano':
        return new Americano();
        break;
      case 'mocha':
        return new Mocha();
        break;
    }
  }
}

class TeaFactory extends DrinkFactory {
  createDrink(type) {
    switch (type) {
      case 'green':
        return new GreenTea();
        break;
      case 'black':
        return new BlackTea();
        break;
      case 'white':
        return new WhiteTea();
        break;
    }
  }
}

// = realization (interfaces)
const factory = DrinkFactory.createFactory('coffee');
const americano = factory.createDrink('americano');

// = 2nd example
class Dom {
  static createElement(type, props, ...children) {
    const element = document.createElement(type);

    Object.keys(props).forEach(key => (element[key] = props[key]));

    children.forEach(child => {
      if (typeof child === 'string') {
        child = document.createTextNode(child);
      }

      element.appendChild(child);
    });

    return element;
  }

  static createFactory(type) {
    return DOM.createElement.bind(null, type);
  }
}
