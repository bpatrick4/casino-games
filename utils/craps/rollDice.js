// require utils
const { getRandomInt } = require("../getRandomInt");

// six-sided die
const LOW = 1; //inclusive
const HIGH = 7; //exclusive

// roll a pair of dice; return each die value and total
function rollDice(){
  const dieOneResult = getRandomInt(LOW, HIGH);
  const dieTwoResult = getRandomInt(LOW, HIGH);

  const dice = [dieOneResult, dieTwoResult, (dieOneResult + dieTwoResult)];
  return dice;
}

module.exports = {
  rollDice,
};