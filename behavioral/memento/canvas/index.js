const states = [];

const canvas = new Canvas(document.querySelector('#canvas'));
const undoButton = document.querySelector('button');

canvas.element.addEventListener('click', event => {
  const { clientX: x, clientY: y } = event;
  const rect = new Rect(100, 100);

  canvas.drawRect(x, y, rect);

  states.push(canvas.createMemento());

  console.log(states);
});

undoButton.addEventListener('click', event => {
  states.pop();

  let previousState = states[states.length - 1];

  if (previousState) canvas.setState(previousState);
});
