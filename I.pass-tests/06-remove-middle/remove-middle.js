const removeMiddle = (words) => {
  if (!Array.isArray(words)) return "";
  if (words.length === 0) return "";

  const validWords = words.filter((word) => typeof word === "string");

  const normalizeWords = validWords.map((word) =>
    word.toLowerCase().trim().replace(/\s/g, "")
  );
  return normalizeWords[Math.floor(normalizeWords.length / 2)];
};

module.exports = { removeMiddle };
