export const add = (string) => {

  let initialArray = string.split(/[^-\d]+/)
  const numbers = initialArray.filter(item => item !== "").map(item => parseInt(item, 10))
  const negativeNumbers = numbers.filter((number) => number < 0);

  if(negativeNumbers.length > 0) {
    throw new Error(`Negatives not allowed: ${negativeNumbers.join(', ')}`)
  }

  const sum = numbers.reduce((acc, cur) => (cur <= 1000 ? acc + cur : acc), 0);

  return sum;
}