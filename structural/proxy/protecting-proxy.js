// Proxy помогает обеспечить защиту свойств объекта

// ================================================
const person = {
  name: 'Alex',
  nickname: 'Zolo'
};

const handler = {
  get(target, prop) {
    // защищённое свойство [name]
    if (target[prop] != 'Alex') {
      console.log('hi');
      return target[prop];
    } else {
      console.log('bye');
      return 'This prop is under protect';
    }
  }
};

let proxy = new Proxy(person, handler);

console.log(proxy.name);
