const { removeVowels } = require("../02-remove-vowels/remove-vowels");

const removeVowelsForWords = (words) => {
  if (!Array.isArray(words) || words.length === 0)
    return "Not exist a array or empty array";

  const result = [];
  
  words.forEach((word) => {
    if (typeof word === "string")
      result.push(removeVowels(word).replace(/_/g, "").toLowerCase());
  });

  return result;
};
module.exports = removeVowelsForWords;
