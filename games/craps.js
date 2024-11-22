// craps game
let balanceObj = { balance: 500 };
const bet = ["pass", 25];//bet[betType, betAmount]

// require utils
const { rollDice } = require("../utils/craps/rollDice");
const { comeOutRoll } = require("../utils/craps/comeOutRoll");

// roll dice; returns array of diceResult[dieOne, dieTwo, total]
const diceResult = rollDice();

/* game */
console.log(diceResult);
comeOutRoll(diceResult, bet, balanceObj);