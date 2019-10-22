// = Observable
function Observable() {
  const observers = [];
  this.sendMessage = function(msg) {
    for (let i = 0, len = observers.length; i < len; i++) {
      observers[i].notify(msg);
    }
  };

  this.addObserver = function(observer) {
    observers.push(observer);
  };
}

// = [Observer] - ['Наблюдатель']
function Observer(behavior) {
  this.notify = function(msg) {
    behavior(msg);
  };
}

// = creating Observable & Observers
var observable = new Observable();

var obs_1 = new Observer(function(msg) {
  console.log(msg);
});

var obs_2 = new Observer(function(msg) {
  alert(msg);
});

// = adding Observers in Observable
observable.addObserver(obs_1);
observable.addObserver(obs_2);

// = setting Observable behavior and sending message
setTimeout(function() {
  const dateObj = new Date();
  observable.sendMessage('Текущее время: ' + dateObj.toLocaleTimeString());
}, 3000);
