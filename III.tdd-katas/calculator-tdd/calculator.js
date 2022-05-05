//??  function Calculator () {
//   this.add = Add;
// }

const Add = (numbers, delimiter = ',') => {
  // Sanitize input
  const replace = numbers.replace(/\n/g, delimiter);
  const splitNumbers = replace.split(delimiter);
  const parseIntNumbers = splitNumbers.map(number => parseInt(number));
  // End of sanitize

  // Validate input
  const ignoreMoreThan1000 = parseIntNumbers.filter(number => number <= 1000);
  const detectNegatives = ignoreMoreThan1000.filter(number => number < 0);
  if (detectNegatives.length > 0) return `negatives not allowed: ${detectNegatives.join(',')}`;
  // End of validate

  // Calculates
  const sum = ignoreMoreThan1000.reduce((acc, number) => acc + number, 0);
  return sum;
}

module.exports = { 
 Add
} 