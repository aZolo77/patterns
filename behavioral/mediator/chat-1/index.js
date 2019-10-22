const Chat = require('./chat');
const User = require('./user');

const chat = new Chat();

const user_1 = new User('User 1');
const user_2 = new User('User 2');
const user_3 = new User('User 3');

chat.subscribe(user_1);
chat.subscribe(user_2);
chat.subscribe(user_3);

user_1.say('Hello!');
user_2.say('Hey!');
user_3.say('Hey guys!');

chat.unsubscribe(user_2);
