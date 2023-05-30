const getLargestNumber = (array) => {
  if (!Array.isArray(array)) {
    throw new Error("Error");
  }
  if(array.length<2){
    throw new Error("Error");
  }
  
  const largestNumber = array.sort((a, b) => b - a)
  return largestNumber[0]
}
  /*
  let largestNumber;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      largestNumber = array[i];
    }
  }
  return largestNumber;
}*/

module.exports = {
  getLargestNumber
};
