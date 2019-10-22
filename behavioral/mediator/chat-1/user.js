// Субъект

class User {
  constructor(name) {
    this.name = name;
    this.onMessage = Function.prototype; // получение одной и той же пустой функции, без создания новых объектов
  }

  say(message) {
    // вызывается метод Чата publish
    this.onMessage(this, message);
  }

  receive(user, message) {
    console.log(`${user.name}: ${message}`);
  }
}

module.exports = User;
