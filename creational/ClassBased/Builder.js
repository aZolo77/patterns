// Паттерн Строитель - позволяет создавать сложные объекты пошагово и с различными конфигурациями
// Изоляция бизнес-логики от Клиентского кода (основного модуля)

// ==============================================================
// = 1st example
// complex object we need to build (создание неизменного объекта)
class Computer {
  constructor(builder) {
    this.motherboard = builder.motherboard || null;
    this.processor = builder.processor || null;
    this.memory = builder.memory || null;
  }
}

// Builder class
class ComputerBuilder {
  constructor() {
    this.motherboard = null;
    this.processor = null;
    this.memory = null;
  }

  setMotherboard(motherboard) {
    this.motherboard = motherboard;
    return this;
  }

  setProcessor(processor) {
    this.processor = processor;
    return this;
  }

  setMemory(memory) {
    this.memory = memory;
    return this;
  }

  build() {
    const computer = new Computer(this);
    return computer;
  }
}

// class Director (реализует разные конфигурации объекта - как будто у класса несколько конструкторов)
class Director {
  constructor(builder) {
    this.builder = builder;
  }

  // use all available arguments
  buildExpensiveComputer() {
    this.builder
      .setMotherboard(new Motherboard())
      .setProcessor(new Processor())
      .setMemory(new Memory());
    return builder.build();
  }

  // user soame arguments
  buildCheapComputer() {
    this.builder.setMotherboard(new Motherboard());
    return this.builder.build();
  }
}

// = realization 1 (напрямую через Builder)
const computer = new ComputerBuilder()
  .setMotherboard(new Motherboard())
  .setProcessor(new Processor())
  .setMemory(new Memory())
  .build();

// = realization 2 (через дополнительный класс Director)
const builder = new ComputerBuilder();
const director = new Director(builder);

const comp_1 = director.buildExpensiveComputer();
const comp_2 = director.buildCheapComputer();

// =====================================
// = 2nd example (dynamic FORM creation)

// required complex Object
class Form {
  constructor(fields) {
    this.element = document.createElement('form');

    for (const field of fields) {
      this.formElement.appendChild(field.element);
    }
  }
}

// Builder
class FormBuilder {
  constructor() {
    this.fields = [];
    this.method = method;
    this.action = action;
  }

  setMethod(method) {
    this.method = method;
    return this;
  }

  setAction(action) {
    this.action = action;
    return this;
  }

  addField(options) {
    let field;

    switch (options.type) {
      case 'text':
        field = new TextField(options);
        break;
      case 'email':
        field = new EmailField(options);
        break;
      case 'password':
        field = new PasswordField(options);
        break;
      default:
        throw new Error(`Invalid field type`);
    }

    this.fields.push(field);
    return this;
  }

  getForm() {
    const form = new Form(this.fields);
    return form;
  }
}

// = realization
let formBuilder = new FormBuilder();

formBuilder
  .setMethod('post')
  .setAction('/login')
  .addField({ type: 'text', name: 'username' })
  .addField({ type: 'email', name: 'email' })
  .addField({ type: 'password', name: 'password' });

let form = formBuilder.getForm();

// =====================================
// = 3rd example (dynamic HTML creation)

// complex object
class HtmlElement {
  constructor(name, content) {
    this.name = name;
    this.content = content;
    this.children = [];
  }

  toString() {
    let output = '';

    output = '<' + this.name + '>';

    if (this.content) {
      output += this.content;
    }

    for (const child of this.children) {
      output += child.toString();
    }

    output += '</' + this.name + '>';

    return output;
  }
}

// Builder of Dom
class HtmlBuilder {
  constructor(rootName) {
    this.root = new HtmlElement(rootName);
  }

  appendChild(name, content) {
    const element = new HtmlElement(name, content);
    this.root.children.push(element);
  }

  build() {
    return this.root.toString();
  }
}

// = realization
const htmlBuilder = new HtmlBuilder('ul');

htmlBuilder.appendChild('li', 'Hello');
htmlBuilder.appendChild('li', 'World');

const html = htmlBuilder.build();
console.log(html);
