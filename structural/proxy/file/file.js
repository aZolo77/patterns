const fs = require('fs');

class File {
  constructor(filename) {
    // saving value in class property
    this.contents = fs.readFileSync(filename, 'utf-8');
  }
}

module.exports = File;
