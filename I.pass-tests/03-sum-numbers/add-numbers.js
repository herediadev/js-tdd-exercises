const sumNumbers = (numbers) => { 
  const DEFAULT_RESULT = 0;

  return numbers.reduce((acc, curr) => {
    if (typeof curr === "number" && !isNaN(curr)) {
      return acc + curr;
    } else {
      return acc;
    }
  }, DEFAULT_RESULT);
};

module.exports = { sumNumbers };
