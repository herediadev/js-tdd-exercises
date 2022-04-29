const factorial = (int) => {
  if (typeof int !== "number") throw new Error("I need a number to works :(");
  if (int === 0) return 1;
  if (int % 1 != 0) throw new Error("ONLY WHOLE NUMBERS");

  return int * factorial(int - 1);
};

module.exports = { factorial };