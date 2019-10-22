import ToggleButton from './toggle-button.js';

const toggleButton = new ToggleButton({
  element: document.querySelector('.toggle-button'),
  onTextContent: 'Выключить',
  offTextContent: 'Включить',
  // bridge
  implementations: {
    //  задаём в Клиентском коде реализацию (с помощью jquery или на нативном JS или как то ещё)
    addClass: className => this.element.classList.add(className),
    removeClass: className => this.element.classList.remove(className),
    hasClass: className => this.element.classList.contains(className),
    setTextContent: text => (this.element.textContent = text),
    addEventHandler: (event, handler) =>
      this.element.addEventListener(event, handler),
    removeEventHandler: (event, handler) =>
      this.element.removeEventListener(event, handler)
  }
});
