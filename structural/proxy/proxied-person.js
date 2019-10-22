// Заместитель позволяет подставлять вместо реальных объектов специальные объекты-заменители. Эти объекты перехватывают вызовы к оригинальному объекту, позволяя сделать что-то до или после передачи вызова оригиналу

// =========================================================================================================
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  toString() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let handler = {
  get(target, propertyName) {
    console.log('Доступ к свойству ' + propertyName);
    // возвращается свойство оригинального объекта
    return target[propertyName];
  },

  set(target, propertyName, value) {
    console.log('Изменение ' + target[propertyName] + ' на ' + value);
    target[propertyName] = value;
  }
};

let person = new Person('Brendan', 'Eich'); // создатель JS
let proxiedPerson = new Proxy(person, handler);

console.log(proxiedPerson.firstName);

proxiedPerson.firstName = 'Douglas';
proxiedPerson.lastName = 'Crockford';

console.log(person.firstName);
console.log(person.lastName);
