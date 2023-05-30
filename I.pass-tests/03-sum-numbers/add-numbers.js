export const addAllnumbers = (numbers) => {
  if(Array.isArray(numbers)){
    const filtered = numbers.filter(num => typeof num === 'number' && !isNaN(num))
    return Math.round(filtered.reduce((acc, cur) => acc + cur, 0));
  }else{
    throw new Error("Invalid format")
  }
}
