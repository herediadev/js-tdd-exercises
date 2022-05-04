
function Add (numbers, delimiter = ',') {
  const replace = numbers.replace(/\n/g, delimiter);
  const splitNumbers = replace.split(delimiter);
  const parseIntNumbers = splitNumbers.map(number => parseInt(number));
  const filterNumbers = parseIntNumbers.filter(number => number < 1000);
  const sum = filterNumbers.reduce((acc, number) => acc + number, 0);
  const detectNegatives = filterNumbers.filter(number => number < 0);
  
  if (detectNegatives.length > 0) return `negatives not allowed: ${detectNegatives.join(',')}`;
  return sum;
}

module.exports = { 
 Add
}
