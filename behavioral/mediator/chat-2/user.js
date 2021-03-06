// Субъект

class User {
  constructor(name, chat) {
    this.name = name;
    this.chat = chat;
  }

  say(message) {
    // вызывается метод Чата publish
    this.chat.publish(this, message);
  }

  receive(user, message) {
    console.log(`${user.name}: ${message}`);
  }
}

module.exports = User;
