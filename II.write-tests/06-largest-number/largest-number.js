export const getLargestNumber = (array) => {
  if(array === null || Number.isNaN(array)) throw new Error('Invalid params', {cause: {statusError: 1}})
  if(!Array.isArray(array) || array.length === 0) throw new Error('Invalid params', {cause: {statusError: 2}})

  const filteredArray = array.filter(item => typeof item === 'number' && !Number.isNaN(item));
  const largestNumber = filteredArray.length > 0 ? Math.max(...filteredArray) : "";

  return typeof largestNumber === 'number'? largestNumber : '';
}
