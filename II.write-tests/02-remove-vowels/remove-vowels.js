const removeVowels = (word) => {
  if (typeof word !== "string") return "Not a string";
  if (word.length === 0) return "Empty string";

  const normalizedWord = word.toLowerCase().replace(/[^a-z]/g, "");
  return normalizedWord.replace(/[aeiou]/g, "_");
};
module.exports = { removeVowels };
