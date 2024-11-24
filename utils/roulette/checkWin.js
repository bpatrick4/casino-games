// check win
/*
const redArray = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
const blackArray = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
const onesArray = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
const twosArray = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
const threesArray = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
*/

function checkWin(winningNumber, bet){
  if (bet[0] == winningNumber ){
    console.log(`The ball landed on the: ${winningNumber}\nYou won: $${(bet[1] * 35)}`)
  }
  else{
    console.log(`The ball landed on the: ${winningNumber}\nYou lost: $${(bet[1])}`)
  }
}

module.exports = {
  checkWin,
}