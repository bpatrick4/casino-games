// craps game
let balanceObj = { balance: 500 };
let bet = ["pass", 25];//bet[pass/dont, betAmount]

// require middleware
const { rollDice } = require("./middleware/rollDice");

// roll dice; returns array of diceResult[dieOne, dieTwo, total]
const diceResult = rollDice();

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

/* game */
console.log(diceResult)
comeOutRoll(diceResult, bet, balanceObj);