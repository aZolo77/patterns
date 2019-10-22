import ToggleButton from './toggle-button.js';

const toggleButton = new ToggleButton({
  element: document.querySelector('.toggle-button'),
  onTextContent: 'Выключить',
  offTextContent: 'Включить'
});
