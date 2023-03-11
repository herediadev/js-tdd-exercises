// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
function average(numbers) {
  const filteredNumbers = numbers.filter(num => typeof num === 'number');
  const sum = filteredNumbers.reduce((acc, cur) => acc + cur, 0);
  return sum / filteredNumbers.length || 0;
}

module.exports = average;