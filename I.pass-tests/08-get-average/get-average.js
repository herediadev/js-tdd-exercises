// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

const getAverage = (numbers) => {
  // first validation of input for dont forget time if the input is empty or invalid
  if (numbers.length === 0) return "Invalid or empty entry.";
  
  const returnNumbersOnly = numbers.filter((number) => typeof number === "number");

  // Segunda validacion, para comprobar si despues del filtro existen numeros en el array
  if (returnNumbersOnly.length === 0) return "Invalid or empty entry.";

  const sumOfNumbers = returnNumbersOnly.reduce((acc, number) => acc + number, 0);
  return sumOfNumbers / returnNumbersOnly.length;
};

module.exports = { getAverage };
