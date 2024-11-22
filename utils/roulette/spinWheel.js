// require utils
const { getRandomInt } = require("../getRandomInt");

// 1-36, 37 = 0, 38 = 00
const LOW = 1; //inclusive
const HIGH = 39; //exclusive

function spinWheel(){
  const spinResult = getRandomInt(LOW, HIGH);

  return spinResult;
}

module.exports = {
  spinWheel,
}