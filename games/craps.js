// craps game
const bet = ["dont", 25];//bet[betType, betAmount]

// require utils
const { rollDice } = require("../utils/craps/rollDice");
const { comeOutRoll } = require("../utils/craps/comeOutRoll");
const { pointRoll } = require("../utils/craps/pointRoll");


// roll dice; returns array of diceResult[dieOne, dieTwo, total]
const offRoll = rollDice();
const onRoll = rollDice();

/* game */
console.log(offRoll);
comeOutRoll(offRoll, bet);

if (
  offRoll[2] === 2 ||
  offRoll[2] === 3 || 
  offRoll[2] === 7 || 
  offRoll[2] === 11 || 
  offRoll[2] === 12){
  console.log("GAME END.")
}
else{
  console.log(onRoll);
  pointRoll(onRoll, offRoll[2], bet);
};
