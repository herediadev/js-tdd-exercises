const removeMiddle = (words) => {
  if (words.length === 0 || words === "") return "Can't tell the middle word of this array";

  const validWords = words.filter((word) => typeof word === "string");
  const normalizeWords = validWords.map((word) =>
    word.toLowerCase().trim().replace(/\s/g, "")
  );

  if (normalizeWords.length < 3 || normalizeWords.length % 2 === 0) return "Can't tell the middle word of this array";
  
  return normalizeWords[Math.floor(normalizeWords.length / 2)];
};

module.exports = { removeMiddle };
