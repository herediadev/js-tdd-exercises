const addOne = (numbers) => {
  // Curiosa linea para probar un error en el test
  if (!Array.isArray(numbers)) throw new Error("Its not array");
  if (numbers.length === 0 || numbers.every(isNaN)) {
    return [];
  }
  const onlyNumbers = numbers.filter((n) => typeof n === "number" && !isNaN(n));
  return onlyNumbers.map((n) => n + 1);
};

module.exports = {
  addOne,
};
