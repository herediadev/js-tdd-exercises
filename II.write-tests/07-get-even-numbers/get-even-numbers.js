export const getEven = (numbers) => {
  if(numbers === null || Number.isNaN(numbers)) throw new Error('Invalid params', {cause: {statusError: 1}})
  if(!Array.isArray(numbers) || numbers.length === 0) throw new Error('Invalid params', {cause: {statusError: 2}})

  const filteredNumbers = numbers.filter(number => number % 2 === 0 && typeof number === 'number')

  return filteredNumbers;
}
