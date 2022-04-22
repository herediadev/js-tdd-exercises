const getLargestNumber = (array) => {
  if (!Array.isArray(array)) return "Invalid input";
  if (array.length === 0) return "Empty array";

  const validNumbers = array.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );
  if (validNumbers.length === 0) return "Empty array";

  const sortedNumbers = validNumbers.sort((a, b) => b - a);
  return sortedNumbers[0];
};

module.exports = getLargestNumber;
