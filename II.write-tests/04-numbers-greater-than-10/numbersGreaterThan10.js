export const largerThanTen = (array) => {
  if(array === null || Number.isNaN(array)) throw new Error('Invalid params', {cause: {statusError: 1}})
  if(!Array.isArray(array) || array.length === 0) throw new Error('Invalid params', {cause: {statusError: 2}})
  
  let result = []
  result = array.map(function(number) {
    if(typeof number === 'number'){
      return number
    }
  });

  const numbersFiltered = result.filter(number => {
    return number > 10;
  })
  
  return numbersFiltered;
  
};
