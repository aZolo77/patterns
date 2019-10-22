// У всех элементов компоновщика должны быть методы с одинаковым названием

class MenuItem {
  constructor(name) {
    this.name = name;
  }

  add() {}

  remove() {}

  render(depth = 0) {
    console.log(`${'   '.repeat(depth)}/${this.name}`);
  }
}

module.exports = MenuItem;
