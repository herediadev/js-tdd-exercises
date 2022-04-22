const getSEcondThird = (array) => {
  if (!Array.isArray(array)) return "Not an array";
  if (array.length === 0) return "Empty array";

  const newArray = array.slice().map((num) => {
    if (
      typeof num === "number" &&
      !Number.isNaN(num) &&
      num != null &&
      num != undefined
    ) {
      return num;
    }
  });

  const sortedArray = newArray.sort((a, b) => a - b);

  return [sortedArray[1], sortedArray[2]];
};

module.exports = getSEcondThird;
