export const removeMiddle = (words) => {
  if(Array.isArray(words)){
    const length = words.length;
    const middle = Math.floor(length / 2);
    
    return length % 2==0 ? words.splice(middle - 1, 1) : words.splice(middle, 1);
  }else{
    throw new Error('Invalid param')
  }
}
