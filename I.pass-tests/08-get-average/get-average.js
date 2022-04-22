// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

const getAverage = (numbers) => {
  const numbersOnly = numbers.filter((number) => typeof number === "number");
  const sum = numbersOnly.reduce((acc, number) => acc + number, 0);

  // AVERAGE
  return sum / numbersOnly.length;
};

module.exports = { getAverage };
