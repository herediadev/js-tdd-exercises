const secondLargest = (numbers) => {
  if (!Array.isArray(numbers)) return "Invalid Input";
  if (numbers.length === 0) return "Empty Input";

  const validNumbers = numbers.filter(
    (n) => typeof n === "number" && !Number.isNaN(n)
  );

  return validNumbers.sort((a, b) => b - a)[1];
};
module.exports = { secondLargest };