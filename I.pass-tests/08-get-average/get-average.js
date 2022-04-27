// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

const getAverage = (numbers) => {
  const numbersOnly = numbers.filter((number) => typeof number === "number");
  const sumOfNumbers = numbersOnly.reduce((acc, number) => acc + number, 0);

  // AVERAGE
  return sumOfNumbers / numbersOnly.length;
};

module.exports = { getAverage };
