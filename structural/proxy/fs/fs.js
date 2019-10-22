const fs = require('fs');

// Перехватывает обращения к модулю и делает обёртку вокруг его метода
// Позволяет защитить доступ к свойствам объекта

// ===================================================================
module.exports = {
  readFile(path, format, cb) {
    if (!path.match(/.md$|.MD$/)) {
      return cb(new Error('Can read only .md files'));
    }

    fs.readFile(path, format, cb);
  }
};
