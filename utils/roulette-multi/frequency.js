// return object with key:value {'number':frequency}
function getFrequency(arr) {
  const frequency = {};
  arr.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1;    
  });
  return frequency;
}

// display frequency object in list form
function displayFrequency(frequency) {
  console.log("List of all spins: ");
  for (let num = 1; num <= 38; num++) {
    const count = frequency[num] || 0;
    console.log(`Number ${num === 37 ? '0': num === 38 ? '00': num}: ${count}`);
  }
}

module.exports = {
  getFrequency,
  displayFrequency,
};