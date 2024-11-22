// roulette game
const bet = ["37", 100];  //user-input

// require utils
const { spinWheel } = require("../utils/roulette/spinWheel");
const { checkWin } = require("../utils/roulette/checkWin");

/* game */
checkWin(spinWheel(), bet);