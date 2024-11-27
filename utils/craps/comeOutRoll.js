// establish point 
function comeOutRoll(diceResult, bet){
  const point = diceResult[2];

  if (bet[0] === "pass"){
    if(point === 7 || point === 11){
      console.log(`You won: $${bet[1]}`);
    }
    else if(point === 2 || point === 3 || point === 12){
      console.log(`You lost: $${bet[1]}`);
    }
  }
  else if (bet[0] === "dont"){
    if(point === 2 || point === 3){
      console.log(`You won: $${bet[1]}`);
    }
    else if(point === 7 || point === 11){
      console.log(`You lost: $${bet[1]}`);
    }
  }
}

module.exports = {
  comeOutRoll,
}