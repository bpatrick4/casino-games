// return array of all roulette spins
function getTotalSpinsList(action, min, max, totalSpins) {
  const arr = [];
  for(let i = 0; i < totalSpins; i++ ) {
    arr.push(action(min, max));
  }
  return arr;
}
module.exports = {
  getTotalSpinsList,
}