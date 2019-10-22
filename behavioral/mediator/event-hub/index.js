class EventHub {
  constructor() {
    this.channels = {};
  }

  subscribe(channel, handler) {
    if (!this.channels[channel]) {
      this.channels[channel] = [];
    }

    this.channels[channel].push(handler);
  }

  publish(channel, ...args) {
    if (this.channels[channel]) {
      this.channels[channel].forEach(handler => handler(args));
    }
  }
}

const eventHub = new EventHub();

const subscriptionService = {
  activate() {}
};

const emailService = {
  send() {}
};

eventHub.subscribe('subscription.activated', user =>
  emailService.send('Пользователь оформил подписку')
);

subscriptionService
  .activate()
  .then(user => eventHub.publish('user.registered', user));
