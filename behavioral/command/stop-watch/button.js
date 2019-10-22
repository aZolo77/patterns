class Button {
  constructor({ element = document.createElement('button'), text = '' }) {
    this.element = element;
    this.element.textContent = text;

    this.handleClick = this.handleClick.bind(this);

    this.init();
  }

  init() {
    this.element.addEventListener('click', this.handleClick);
  }

  destroy() {
    this.element.removeEventListener('click', this.handleClick);
  }

  setCommand(command) {
    this.command = command;
  }

  handleClick() {
    this.command.execute();
  }
}
