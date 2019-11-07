// * Одиночка - гарантия того, что все будущие объекты будут иметь ссылку на единственный экземпляр данного класса

// - 1
{
  class Database {
    constructor(data) {
      if (Database.exists) {
        return Database.instance;
      }
      Database.instance = this;
      Database.exists = true;
      this.data = data;
    }

    getData() {
      return this.data;
    }
  }

  // ? любой объект, созданный при помощи конструктора Counter будет получать ссылку на instance
  const mongo = new Database('MongoDB');
  console.log(mongo.getData()); // MongoDB

  const mySql = new Database('MySQl');
  console.log(mySql.getData()); // MongoDB

  mySql.data = 'MySQl';
  console.log(mongo.getData()); // MySQl
}
