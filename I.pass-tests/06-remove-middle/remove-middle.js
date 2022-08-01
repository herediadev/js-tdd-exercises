const removeMiddle = (words) => {
  if (!Array.isArray(words)) {
    throw new Error("¿Ocurrió un error!");
  }
/*   if (words.length % 2 === 0) {
    throw new Error("¿Ocurrió un error!");
  } */
  if (words.length !== 5) {
    throw new Error("¿Ocurrió un error!");
  }
  return words.splice(2, 1);
}

module.exports = { removeMiddle };