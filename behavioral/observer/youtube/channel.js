// обёртка метода emit в дополнительном методе publish
const Subject = require('./subject');

class YouTubeChannel extends Subject {
  publish(title) {
    this.emit('publish', title);
  }
}

module.exports = YouTubeChannel;
