// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
export const average = (numbers) => {
  if(numbers === null) throw new Error('Invalid params', {cause: {statusError: 1}})
  if(Number.isNaN(numbers)) throw new Error('Invalid params', {cause: {statusError: 2}})
  if(numbers.length < 1) throw new Error('Invalid params', {cause: {statusError: 3}})
  if(numbers === true || numbers === false) throw new Error('Invalid params', {cause: {statusError: 4}})
  if(numbers.some(num => typeof !num=== 'number')) throw new Error('Invalid params', {cause: {statusError: 5}})

  const filteredNumbers = numbers.filter(num => typeof num === 'number');
  const sum = filteredNumbers.reduce((acc, cur) => acc + cur, 0);
  return sum / filteredNumbers.length || 0;
}

