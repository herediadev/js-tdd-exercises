const findWord = (words, searchWord) => {
  if (words.length === 0) return;
  const cleanSearchWord = searchWord.replace(/[^a-z]/gi, "").toLowerCase();
  const cleanWords = words.map((word) =>
    word.replace(/[^a-z]/gi, "").toLowerCase()
  );
  return cleanWords.indexOf(cleanSearchWord);
};

module.exports = { findWord };
