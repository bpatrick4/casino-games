// craps game
// pair of dice (1-6)
const LOW = 1; //inclusive
const HIGH = 7; //exclusive

// get int between min and (max - 1)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// rolls a pair of dice; returns each die value and total
function roll(){
  const dieOneResult = getRandomInt(LOW, HIGH);
  const dieTwoResult = getRandomInt(LOW, HIGH);
  const dice = [dieOneResult, dieTwoResult, (dieOneResult + dieTwoResult)];
  return dice;
} 

// roll dice
const diceResult = roll();

// log to console
console.log(`die one: ${diceResult[0]}\ndie two: ${diceResult[1]}\nroll total: ${diceResult[2]}`);