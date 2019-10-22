const Player = require('./player');

const player = new Player();

console.log(player.state);
console.log('='.repeat(50));

player.on();

console.log(player.state);
console.log('='.repeat(50));

player.play();

console.log(player.state);
console.log('='.repeat(50));

player.pause();

console.log(player.state);
