// прописываем логику в классе, а реализацию передаём клиенту
export default class ToggleButton {
  constructor({ element, onTextContent, offTextContent, implementation }) {
    this.element = element;
    this.onTextContent = onTextContent;
    this.offTextContent = offTextContent;
    this.implementation = implementation;
    this.handleClick = () => this.toggle();

    this.init();
  }

  get toggled() {
    // return toggled
    return this.implementation.hasClass('toggle-button--toggled');
  }

  set toggled(value) {
    // set toggled
    this.toggle(value);
  }

  init() {
    // подписаться на событие
    return this.implementation.addEventHandler('click', this.handleClick);
  }

  destroy() {
    // отписаться от события
    return this.implementation.removeEventHandler('click', this.handleClick);
  }

  toggle(isToggled = false) {
    let textContent;

    if (isToggled) {
      textContent = this.onTextContent;
      this.implementation.addClass('toggle-button--toggled');
    } else {
      textContent = this.offTextContent;
      this.implementation.removeClass('toggle-button--toggled');
    }

    this.implementation.setTextContent(textContent);
  }
}
