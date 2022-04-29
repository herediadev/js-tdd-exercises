const getWordLengths = (arrayOfWords) => {
  if (!Array.isArray(arrayOfWords))
    throw new Error("I need an array to works :(");

  const result = [];

  arrayOfWords.filter((element) => {
    if (typeof element === "string") {
      result.push(element.length);
    }
  });

  return result;
};

module.exports = { getWordLengths };
