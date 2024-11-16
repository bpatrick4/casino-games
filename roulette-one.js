// roulette game
// 1-36, 37 = 0, 38 = 00
const low = 1
const high = 39

// get int between min and (max - 1)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// display one roulette spin
console.log(`The ball landed on the: ${getRandomInt(low, high)}`);