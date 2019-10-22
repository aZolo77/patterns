// гарантия того, что все будущие объекты будут иметь ссылку на единственный экземпляр данного класса
// ==================================================================================================

// == OOP ==

const mongoose = require('mongoose');
const mongodbUri = 'mongodb://@ds213832.mlab.com:13832/restapi';

class Database {
  static async getInstance() {
    if (!Database.instance) {
      const client = await mongoose.connect(
        mongodbUri,
        {
          useNewUrlParser: true,
          auth: {
            user: 'zolo',
            password: 'test123'
          }
        }
      );
      Database.client = client;
      Database.instance = mongoose.connection;
    }

    return await Database.instance;
  }

  static close() {
    if (Database.client) {
      Database.client.close();
    }
  }
}

// = realization
(async () => {
  console.time('1st instance');
  const db_1 = await Database.getInstance(); // creating 1st Object
  console.timeEnd('1st instance');

  console.time('2nd instance');
  const db_2 = await Database.getInstance(); // creating 2st Object
  console.timeEnd('2nd instance');

  console.log(db_1 === db_2); // true
})();

// == Func ==

// 1st example
function Star() {
  if (!Star.instance) {
    Star.instance = this;
    this.color = 'yellow';
    this.sparcle = function() {
      console.log('Sparcle!');
    };
  }

  return Star.instance;
}

// = realization
var star1 = new Star(); // creating 1st Object
var star2 = new Star(); // creating 2st Object

console.log(star1 === star2); // true

// 2nd example
function Sun() {
  if (typeof Sun.instance === 'object') {
    return Sun.instance;
  }

  this.color = 'green';
  this.isBig = true;

  Sun.instance = this;
}

// = realization
var sun1 = new Sun(); // creating 1st Object
var sun2 = new Sun(); // creating 2st Object

console.log(sun1 === sun2); // true
