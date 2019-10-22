// Жёсткая привязка к среде реализации данного класса

export default class ToggleButton {
  constructor({ element, onTextContent, offTextContent }) {
    this.root = element;
    this.onTextContent = onTextContent;
    this.offTextContent = offTextContent;
    this.handleClick = () => this.toggle();

    this.init();
  }

  get toggled() {
    // return toggled
    // return this.root.classList.contains('toggle-button--toggled');
  }

  set toggled(value) {
    // set toggled
    this.toggle(value);
  }

  init() {
    // подписаться на событие
    // this.root.addEventListener('click', this.handleClick);
  }

  destroy() {
    // отписаться от события
    // this.root.removeEventListener('click', this.handleClick);
  }

  toggle(isToggled = false) {
    let textContent;

    if (isToggled) {
      textContent = this.onTextContent;
      // добавить класс
      // this.root.classList.add('toggle-button--toggled');
    } else {
      textContent = this.offTextContent;
      // удалить класс
      // this.root.classList.remove('toggle-button--toggled');
    }

    // изменить текст
    // this.root.textContent = textContent;
  }
}
