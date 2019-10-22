const fs = require('fs');

// Proxy оборачивает другой объект и перед тем, как вызвать методы этого объекта, записывает логи в файл

// =====================================================================================================
class ListLogProxy {
  constructor(filename, list) {
    this.filename = filename;
    this.list = list;
  }

  get(value) {
    fs.appendFileSync(this.filename, `READ: ${value} \r\n`);
    return this.list.get(value);
  }

  add(value) {
    fs.appendFileSync(this.filename, `ADD: ${value} \r\n`);
    return this.list.add(value);
  }

  remove(value) {
    fs.appendFileSync(this.filename, `REMOVE: ${value} \r\n`);
    return this.list.remove(value);
  }
}

module.exports = ListLogProxy;
