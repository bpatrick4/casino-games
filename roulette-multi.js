// roulette game
// 1-36, 37 = 0, 38 = 00
const LOW = 1; //inclusive
const HIGH = 39; //exclusive
const totalSpins = 6; //user-input

// require middleware
const { getRandomInt } = require("./middleware/getRandomInt");
const { getFrequency } = require("./middleware/frequency");
const { displayFrequency } = require("./middleware/frequency");

// return array of all roulette spins
function getListOfTotalSpins(action, min, max, totalSpins) {
  const arr = [];
  for(let i = 0; i < totalSpins; i++ ) {
    arr.push(action(min, max));
  }
  return arr;
}

// get array of all spins
let resultArr = getListOfTotalSpins(getRandomInt, LOW, HIGH, totalSpins);

// display array of all spins
console.log("Array of all spins: ");
console.log(resultArr);
console.log();

// display spin frequency
displayFrequency(getFrequency(resultArr));