const getWordLengths = (someWords) => {
  if (!Array.isArray(someWords)) {
    throw new Error("¡Ocurrió un error!");
  }
  const isString = someWords.every(word => typeof word === "string");
  if (!isString) {
    throw new Error("¡Ocurrió un error!");
  }
  return someWords.map(word => word.length);
  // if (Array.isArray(someWords)) {
  //   return someWords.map(word => word.length);
  // }else{
  //   throw new Error("¡Ocurrió un error!");
  // }
}

module.exports = { getWordLengths };
