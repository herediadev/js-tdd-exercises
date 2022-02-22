const removeVowelsForWords = (words) => {
  let result = [];
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

  const result = words.map((word) => {
    return removeVowelsForWords(word);
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
