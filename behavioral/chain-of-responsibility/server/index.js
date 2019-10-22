const App = require('./app');

const app = new App();

app.use((req, res, next) => {
  res.write('1st handler \r\n');
  next();
});

app.use((req, res, next) => {
  res.write('2nd handler \r\n');
  next();
});

app.use((req, res, next) => {
  res.write('3rd handler \r\n');
  next();
});

app.listen(3001);
