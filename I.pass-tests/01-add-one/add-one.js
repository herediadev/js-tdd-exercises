export const addOne = (numbers) => {
  if(!Array.isArray(numbers)){
    throw new Error ('Invalid format')
  }
  const filteredNumbers = numbers.filter(num => typeof num === 'number');
  if(filteredNumbers.length === 0){
    return [];
  }else{
    return filteredNumbers.map(element => Math.round(element + 1));
  }
  
}
