// Наблюдатель передаётся полностью как объект, а Субьект вызывает его метод update
const YouTubeChannel = require('./channel');

const zChannel = new YouTubeChannel();

const subscriber_1 = {
  update(title) {
    console.log('Watching...', title, '1');
  }
};
const subscriber_2 = {
  update(title) {
    console.log('Watching...', title, '2');
  }
};

zChannel.on('publish', subscriber_1);
zChannel.on('publish', subscriber_2);

// zChannel.off('publish', subscriber_2);

zChannel.publish('JS Patterns');
