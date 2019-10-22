const startButton = new Button({ text: 'Старт' });
const pauseButton = new Button({ text: 'Пауза' });
const stopButton = new Button({ text: 'Стоп' });

// секундомер
const stopwatch = new Stopwatch(seconds => console.log(seconds));

// startButton.element.addEventListener('click', () => {
//   stopwatch.start();
// });

// pauseButton.element.addEventListener('click', () => {
//   stopwatch.pause();
// });

// stopButton.element.addEventListener('click', () => {
//   stopwatch.stop();
// });

// Можно переписать как
const startStopwatch = new StartStopwatchCommand(stopwatch);
const pauseStopwatch = new PauseStopwatchCommand(stopwatch);
const stopStopwatch = new StopStopwatchCommand(stopwatch);

startButton.setCommand(startStopwatch);
pauseButton.setCommand(pauseStopwatch);
stopButton.setCommand(stopStopwatch);

document.body.appendChild(startButton.element);
document.body.appendChild(pauseButton.element);
document.body.appendChild(stopButton.element);
