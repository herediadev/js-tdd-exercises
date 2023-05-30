const {removeVowels} = require("../02-remove-vowels/remove-vowels");

const removeVowelsForWords = (words) => {
  
  const result = words.map((word) => {
    return removeVowels(word);
  });

  return result;
}

module.exports = {
  removeVowelsForWords
};

/*
    input: ["Irina", "Etza", "Daniel"]
    expected output: ["rn", "tz", "Dnl"]
*/
