const calculator = (stringNumbs) => {
  if (stringNumbs.length === 0) return 0;

  let sum = 0;
  let arrNumbs = stringNumbs.split(" ");

  for (let i = 0; i < arrNumbs.length; i++) {
    sum += Number(arrNumbs[i]);
  }

  return sum;
};

module.exports = { calculator };

console.log(calculator("pepe"));
