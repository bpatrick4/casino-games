// check win
function checkWin(winningNumber, bet){
  if (bet[0] == winningNumber ){
    console.log(`The ball landed on the: ${winningNumber}\nYou won: $${(bet[1] * 2)}`)
  }
  else{
    console.log(`The ball landed on the: ${winningNumber}\nYou lost: $${(bet[1])}`)
  }
}

module.exports = {
  checkWin,
}