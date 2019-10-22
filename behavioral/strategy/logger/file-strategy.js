const fs = require('fs');

class FileStrategy {
  constructor(filename) {
    this.filename = filename;
  }

  execute(val) {
    fs.appendFileSync(this.filename, val);
  }
}

module.exports = FileStrategy;
