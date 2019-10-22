// Proxy перехватывает вызовы методов основного объекта
const List = require('./list');
const ListLogProxy = require('./list-log-proxy');

const list = new ListLogProxy('log.txt', new List());

list.add('Hello');
list.get('World');
list.remove('!');
