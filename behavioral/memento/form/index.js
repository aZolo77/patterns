const form = new Form(document.querySelector('form'));

// если есть снимок (объект со значениями инпутов)
const state = localStorage.getItem('form');

if (state) {
  // восстанавливаем состояние формы
  form.setMemento(new FormMemento(JSON.parse(state)));
}

// const states = [];

// сохранение состояния формы в локальное хранилище
form.onChange = field => {
  const memento = form.createMemento();
  // states.push(memento.state);
  // console.log(states);
  // сохранить сериализованный снимок в LocalStorage
  localStorage.setItem('form', JSON.stringify(memento.state));
};
