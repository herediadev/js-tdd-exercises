export const getSecondThird = (array) => {
  if(array === null || Number.isNaN(array)) throw new Error('Invalid params', {cause: {statusError: 1}})
  if(!Array.isArray(array) || array.length === 0) throw new Error('Invalid params', {cause: {statusError: 2}})
  
  const newArray = array.filter(item => typeof item === 'number');
  newArray.sort(function(x, y) {
    return x - y;
  });

  return newArray.length < 3 ? [] : [newArray[1], newArray[2]];
};
