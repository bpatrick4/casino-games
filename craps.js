// craps game
// die 1-6
const low = 1
const high = 7
//const totalRolls = 100;

// get int between min and (max - 1)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// rolls a pair of dice and gives total
function roll(){
  const dieOneResult = getRandomInt(low, high);
  const dieTwoResult = getRandomInt(low, high);
  const dice = [dieOneResult, dieTwoResult, (dieOneResult + dieTwoResult)];
  return dice;
}

const diceResult = roll()
console.log(`die one: ${diceResult[0]}
die two: ${diceResult[1]}
roll total: ${diceResult[2]}`)