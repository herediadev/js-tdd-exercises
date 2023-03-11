export const findTheNeedle = (words, needle) => {
  if(!Array.isArray(words) || typeof needle !== 'string' || !needle.length > 0 || !words.length > 0){
    throw new Error("Invalid words or needle format")
  }
  for (let i = 0; i < words.length; i++) {
    if (words[i] === needle && typeof words[i] === 'string') {
      return i;
    }
  }
  return -1
}
