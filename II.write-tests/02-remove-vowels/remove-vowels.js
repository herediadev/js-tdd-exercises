const removeVowels = (word) => {
  let characters = word.split("");

  let result = [];
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

  characters.forEach((character) => {
    if (!vowels.includes(character)) {
      result.push(character);
    } else {
      result.push("_");
    }
  });

  return result.join("");
}

module.exports = {
  removeVowels
};

/*
  Let's trace this piece of code - what is the value of result with this input

  var result = removeVowels('samuel');

  what is the value of result?
*/
