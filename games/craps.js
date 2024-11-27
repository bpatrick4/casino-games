// craps game
const bet = ["dont", 30];//bet[betType, betAmount]

// require utils
const { rollDice } = require("../utils/craps/rollDice");
const { comeOutRoll } = require("../utils/craps/comeOutRoll");

// roll dice; returns array of diceResult[dieOne, dieTwo, total]
const offRoll = rollDice();
const point = offRoll[2];

/* game */
console.log("COME OUT ROLL: ");
console.log(offRoll);
console.log();
comeOutRoll(offRoll, bet);

// add rolls to rollArray; checks win; shows previous rolls (WIP)
function addRolls(bet){
  let rollsArray = [];
  const rollsList = [];
  for (let i = 0; i < 16; i++){
    rollsList.push(rollDice());
  }

  for (let i = 0; i < rollsList.length; i++){
    // end game due to point rolled or 7 rolled
    if (bet[0] === "pass"){
      if (rollsList[i][2] === 7){
        console.log(`You lost: $${bet[1]}`);
        rollsArray.push(rollsList[i][2]);
        break;
      }
      else if (rollsList[i][2] === point){
        console.log(`You won: $${bet[1]}`);
        rollsArray.push(rollsList[i][2]);
        break;
      }
      // if no 7 or point then keep playing; add roll to rollArray
      else{
        rollsArray.push(rollsList[i][2]);
      }
    }
    else if (bet[0] === "dont"){
      if (rollsList[i][2] === point){
        console.log(`You lost: $${bet[1]}`);
        rollsArray.push(rollsList[i][2]);
        break;
      }
      else if (rollsList[i][2] === 7){
        console.log(`You won: $${bet[1]}`);
        rollsArray.push(rollsList[i][2]);
        break;
      }
      // if no 7 or point then keep playing; add roll to rollArray
      else{
        rollsArray.push(rollsList[i][2]);
      }
    }
  };
  console.log();
  console.log("results of previous roll(s)");
  return rollsArray;
}

// check if come out roll is a win/lose
if (
  point === 2 || point === 3 || point === 7 || point === 11 || point === 12){
  console.log("GAME END.");
}
else {
  console.log(`POINT: ${point}`);
  console.log(addRolls(bet));
};
