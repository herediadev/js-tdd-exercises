const {removeVowelsForWords} = require("./remove-vowels-in-array");

describe("remove vowels from all words in array", () => {
  it("For the ['Irina', 'Etza', 'Daniel'] it will return ['rn', 'tz', 'Dnl']", () => {
    // Arrange
    const word = ['Irina', 'Etza', 'Daniel'];
    const expected = ['rn', 'tz', 'Dnl'];
    
    // Act
    const result = removeVowelsForWords(word);

    // Assert
    expect(result).toEqual(expected);
  });
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
