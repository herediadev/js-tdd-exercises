const getWordLengths = (arrayOfWords) => {
  if (!Array.isArray(arrayOfWords)) throw new Error("Its not a array");

  const result = [];

  arrayOfWords.filter((element) => {
    if (typeof element === "string") {
      result.push(element.length);
    }
  });

  return result;
};

module.exports = { getWordLengths };
