const addOne = (numbers) => {
  if (!Array.isArray(numbers)) throw new Error("I need an array to works :(");
  if (numbers === []) return "Empty";

  if (numbers.length === 0 || numbers.every(isNaN)) {
    return [];
  }

  const onlyNumbers = numbers.filter((n) => typeof n === "number" && !isNaN(n));
  return onlyNumbers.map((n) => n + 1);
};

module.exports = {
  addOne,
};
