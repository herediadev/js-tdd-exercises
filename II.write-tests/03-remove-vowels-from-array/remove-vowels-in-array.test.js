const {removeVowelsForWords} = require("./remove-vowels-in-array");

describe("remove vowels from all words in array", () => {
  it("For the ['Irina', 'Etza', 'Daniel'] it will return ['rn', 'tz', 'Dnl']", () => {
    // Arrange
    const input = ['Irina', 'Etza', 'Daniel'];
    const expected = ['_r_n_', '_tz_', 'D_n__l'];
    
    // Act
    const result = removeVowelsForWords(input);

    // Assert
    expect(result).toEqual(expected);
  });
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
