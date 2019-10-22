let person = new person('Brendan', 'Eich');

let input = document.getElementById('firstname');

let binder = new Binder();

// берём данные и помещаем их в другой свойство другого объекта
let proxiedPerson = binder.bindTo(person, 'firstname', input, 'value');

person.firstname = 'Douglas';
