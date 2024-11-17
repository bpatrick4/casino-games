// roulette game
// 1-36, 37 = 0, 38 = 00
const LOW = 1; //inclusive
const HIGH = 39; //exclusive
const totalSpins = 6; //user-input

// get int between min and (max - 1)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// get list of all roulette spins
function getListOfTotalSpins(action, min, max, totalSpins) {
  const arr = [];
  for(let i = 0; i < totalSpins; i++ ) {
    arr.push(action(min, max));
  }
  return arr;
}

// get list of spin frequency
function getFrequency(arr) {
  const frequency = {};
  arr.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1;    
  });
  return frequency;
}

// display spin frequency
function displayFrequency(frequency) {
  for (let num = 1; num <= 38; num++) {
    const count = frequency[num] || 0;
    console.log(`Number ${num === 37 ? '0': num === 38 ? '00': num}: ${count}`);
  }
}

// get array of all spins
let resultArr = getListOfTotalSpins(getRandomInt, LOW, HIGH, totalSpins);

// display array of all spins
console.log(resultArr);

// display spin frequency
let freq = getFrequency(resultArr);
displayFrequency(freq);