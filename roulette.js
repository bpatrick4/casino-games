// roulette game
// 1-36, 37 = 0, 38 = 00
const low = 1
const high = 39
const totalSpins = 100;

// get int between min and (max - 1)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// get list of 100 roulette spins
function getListHundred(action, min, max, totalSpins) {
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
    console.log(`Number ${num}: ${count}`);
  }
}

// get array of all spins
let resultArr = getListHundred(getRandomInt, low, high, totalSpins);

// display array of all spins
console.log(resultArr);

//display spin frequency
let freq = getFrequency(resultArr);
displayFrequency(freq, resultArr.length);