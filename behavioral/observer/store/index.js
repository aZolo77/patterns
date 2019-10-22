// Отслеживание состояния Субъекта, сохранение состояний в массив
const Store = require('./store');

const store = new Store([]);

// в качестве обработчика добавляется функция
store.addObserver(state => console.log('STATE UPDATED: ', state));

store.updateState(state => {
  return [...state, 1]; // STATE UPDATED:  [ 1 ]
});

store.updateState(state => {
  return [...state, 2]; // STATE UPDATED:  [ 1, 2 ]
});

store.updateState(state => {
  return [...state, 3]; // STATE UPDATED:  [ 1, 2, 3 ]
});

store.updateState(state => {
  return [...state, 4]; // STATE UPDATED:  [ 1, 2, 3, 4 ]
});
