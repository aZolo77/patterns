const fs = require('./fs');

fs.readFile('text.txt', 'utf-8', (err, file) => {
  if (err) return console.error(err);

  console.log(file);
});
