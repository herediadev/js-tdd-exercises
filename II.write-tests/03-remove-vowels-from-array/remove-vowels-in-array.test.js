const removeVowelsForWords = require("./remove-vowels-in-array");

describe("Remove vowels of words in a array", () => {
  it("empty array return a mesage", () => {
    // Arrange 
    const words = [];
    const expected = "Not exist a array or array is empty";

    // Act 
    const output = removeVowelsForWords(words);

    // Expect
    expect(output).toEqual(expected);
  });

  it("Check input is an valid input or return empty array default", () => {
    // Arrange 
    const invalidWords = [
      {},
      true,
      false,
      null,
      undefined,
      1,
      2.5,
      NaN,
      Infinity,
    ];
    const expectedOutput = [];

    // Act
    const output = removeVowelsForWords(invalidWords);

    // Expect
    expect(output).toEqual(expectedOutput);
  });

  it("remove vowels from all words in array", () => {
    // Arrange
    const words = ["Irina", "Etza", "Daniel", "D a R", "aLf oer", "@>o1wtpq."];
    const expected = ["rn", "tz", "dnl", "dr", "lfr", "wtpq"];

    // Act
    const result = removeVowelsForWords(words);

    // Expect
    expect(result).toEqual(expected);
  });
});
