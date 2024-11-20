// roulette game
// 1-36, 37 = 0, 38 = 00
const LOW = 1; //inclusive
const HIGH = 39; //exclusive

// require middleware
const { getRandomInt } = require("./middleware/getRandomInt");

// display one roulette spin
console.log(`The ball landed on the: ${getRandomInt(LOW, HIGH)}`);