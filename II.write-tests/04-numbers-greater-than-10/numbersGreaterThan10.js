const numbersGreaterThan10 = (array) => {
  if (!Array.isArray(array)) return "Not an array";
  if (array.length === 0) return "Empty array";
  return array.filter(
    (num) => typeof num === "number" && num > 10 && !Number.isNaN(num)
  );
};

module.exports = { numbersGreaterThan10 };
