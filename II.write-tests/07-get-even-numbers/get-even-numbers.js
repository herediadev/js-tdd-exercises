const getEven = (arr) => {
  if (!Array.isArray(arr)) return "Not an array";
  if (arr.length === 0) return "Empty array";

  const evenNumbers = arr.filter(
    (item) => typeof item === "number" && !isNaN(item) && item % 2 === 0
  );
  if (evenNumbers.length === 0) return "Empty array";

  return evenNumbers;
};

module.exports = { getEven };
