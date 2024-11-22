// roulette game
// 1-36, 37 = 0, 38 = 00
const LOW = 1; //inclusive
const HIGH = 39; //exclusive
const totalSpins = 6; //user-input

// require utils
const { getRandomInt } = require("../utils/getRandomInt");
const { getFrequency } = require("../utils/roulette-multi/frequency");
const { displayFrequency } = require("../utils/roulette-multi/frequency");
const { getTotalSpinsList } = require("../utils/roulette-multi/totalSpinsList");

// get array of all spins
const resultArr = getTotalSpinsList(getRandomInt, LOW, HIGH, totalSpins);

// display array of all spins
console.log("Array of all spins: ");
console.log(resultArr);
console.log();

// display spin frequency
displayFrequency(getFrequency(resultArr));