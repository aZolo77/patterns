// Снимок позволяет сохранять и восстанавливать прошлые состояния объектов, не раскрывая подробностей их реализации

// ================================================================================================================
// memento нужен только для хранения данных(состояния) - он не содержит методов
class FormMemento {
  constructor(state) {
    this.state = state;
  }
}

class Form {
  constructor(element) {
    this.element = element;
    this.state = new Map();
    this.onChange = Function.prototype;
    this.handleChange = this.handleChange.bind(this);

    for (let field of element.elements) {
      if (field.tagName === 'INPUT') {
        field.addEventListener('change', this.handleChange);
        // инициализация состояния формы
        this.state.set(field.name, field.value);
      }
    }
  }

  handleChange(event) {
    const field = event.target;

    // меняем значение данного поля в Map
    this.state.set(field.name, field.value);

    this.onChange(event.target);
  }

  // создание снимка
  createMemento() {
    // сохранить преобразованный Map в объект Memento
    return new FormMemento(Array.from(this.state));
  }

  // восстановление состояния объекта на основе снимка
  setMemento(memento) {
    this.state = new Map(memento.state);

    for (let field of this.element.elements) {
      if (field.tagName === 'INPUT') {
        field.value = this.state.get(field.name);
      }
    }
  }
}

Form.Memento = FormMemento;
