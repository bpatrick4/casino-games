// roll until point or seven
function pointRoll(diceResult, point, bet){
  const rollTotal = diceResult[2];

  if (bet[0] === "pass"){
    if(rollTotal === point){
      console.log(`You won: $${bet[1] * 2}`);
    }
    else if(rollTotal === 7){
      console.log(`You lost: $${bet[1]}`);
    }
  }
  else if (bet[0] === "dont"){
    if(rollTotal === 7){
      console.log(`You won: $${bet[1] * 2}`);
    }
    else if(rollTotal === point){
      console.log(`You lost: $${bet[1]}`);
    }
  }
}

module.exports = {
  pointRoll,
}