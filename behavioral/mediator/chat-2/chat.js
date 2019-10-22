// Посредник позволяет уменьшить связанность множества классов между собой, благодаря перемещению этих связей в один класс-посредник

// =================================================================================================================

class Chat {
  constructor() {
    this.users = [];
    this.publish = this.publish.bind(this);
  }

  subscribe(user) {
    user.onMessage = this.publish;
    this.users.push(user);
  }

  unsubscribe(userToDel) {
    for (const user of this.users) {
      if (userToDel == user) {
        let index = this.users.indexOf(user);
        this.users.splice(index, 1);
        break;
      }
    }
  }

  publish(origin, message) {
    for (let user of this.users) {
      if (origin !== user) {
        user.receive(origin, message);
      }
    }
  }
}

module.exports = Chat;
