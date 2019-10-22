// создание новыч сущностей (объектов или классов) методом специального объекта
// фабричный метод - когда в объекте создаётся отдельный метод, который отвечает за создание объектов
// ==================================================================================================

// == OOP ==

// = 1st example
// classes
class Car {
  constructor(options) {
    this.doors = options.doors || 4;
    this.state = options.state || 'brand new';
    this.color = options.color || 'white';
  }
}

class Truck {
  constructor(options) {
    this.doors = options.doors || 4;
    this.state = options.state || 'used';
    this.color = options.color || 'black';
  }
}

// сам шаблон - "Фабрика"
class VehicleFactory {
  createVehicle(options) {
    if (options.vehicleType === 'car') {
      return new Car(options);
    } else if (options.vehicleType === 'truck') {
      return new Truck(options);
    } else {
      return {};
    }
  }
}

// = realization
const carFactory = new VehicleFactory();

// creating 1st Object
const car = carFactory.createVehicle({
  vehicleType: 'car',
  doors: 4,
  color: 'silver',
  state: 'Brand new'
});

// creating 2st Object
const truck = carFactory.createVehicle({
  vehicleType: 'truck',
  doors: 2,
  color: 'white',
  state: 'used'
});

// = 2nd example

class Form {
  static createField(type, props) {
    if (Form.FieldTypes[type]) {
      return new Form.FieldTypes[type](props);
    } else {
      throw new Error(`Invalid field type: ${type}`);
    }
  }

  constructor() {
    this.element = document.createElement('form');
  }

  addFields(...fields) {
    for (let field of fields) {
      this.element.appendChild(field);
    }
  }
}

Form.FieldTypes = {
  TEXT: TextField,
  EMAIL: EmailField,
  PASSWORD: PasswordField
};

// = realization
const form = new Form();

form.addFields(
  Form.createField(Form.FieldTypes.TEXT, {
    name: 'username',
    placeholder: 'User Name'
  }),
  Form.createField(Form.FieldTypes.EMAIL, {
    name: 'username',
    onchange: event => console.log(event)
  }),
  Form.createField(Form.FieldTypes.PASSWORD)
);
