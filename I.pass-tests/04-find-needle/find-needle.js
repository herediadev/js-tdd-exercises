const findWord = (words, searchWord) => {
  if (words.length === 0) return;
  if (typeof searchWord !== "string") return;

  const parseSearchWord = searchWord.replace(/[^a-z]/gi, "").toLowerCase();
  const parseWords = words.map((word) =>
    word.replace(/[^a-z]/gi, "").toLowerCase()
  );
  const withoutDuplicates = [...new Set(parseWords)];
  return withoutDuplicates.findIndex((word) => word === parseSearchWord);
};

module.exports = { findWord };
