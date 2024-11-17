// craps game
// pair of dice (1-6)
const LOW = 1; //inclusive
const HIGH = 7; //exclusive
let balanceObj = { balance: 500 };
let bet = ["pass", 25];//bet[pass/dont, betAmount]

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

// roll dice; returns array of diceResult[dieOne, dieTwo, total]
const diceResult = roll();

console.log(diceResult)

// establish point
function comeOutRoll(diceResult, bet, balanceObj){
  const point = diceResult[2];

  function updateBalance(amount) {
    balanceObj.balance += amount;
  }

  if (bet[0] === "pass"){
    if(point === 7 || point === 11){
      updateBalance(bet[1] * 2);
      console.log(`You won: $${bet[1] * 2} Balance: $${balanceObj.balance}`);
    }
    else if(point === 2 || point === 3 || point === 12){
      updateBalance(-bet[1]);
      console.log(`You lost: $${bet[1]} Balance: $${balanceObj.balance}`);
    }
  }
  else if (bet[0] === "dont"){
    if(point === 2 || point === 3){
      updateBalance(bet[1] * 2);
      console.log(`You won: $${bet[1] * 2} Balance: $${balanceObj.balance}`);
    }
    else if(point === 7 || point === 11){
      updateBalance(-bet[1]);
      console.log(`You lost: $${bet[1]} Balance: $${balanceObj.balance}`);
    }
  }
}

// game
comeOutRoll(diceResult, bet, balanceObj);