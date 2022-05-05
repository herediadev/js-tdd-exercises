const { removeVowels } = require("./remove-vowels");

describe("Remove vowels of a string", () => {
  it("Check input is a string or return a message", () => {
    // Arrange
    const invalidWords = [
      {},
      [],
      true,
      false,
      null,
      undefined,
      1,
      2.5,
      NaN,
      Infinity,
    ];
    const expectedOutput = "Not a string";

    // Act
    const output = removeVowels(invalidWords);

    // Assert
    expect(output).toEqual(expectedOutput);
  });

  it("ignore spaces and special characters and make lowercase", () => {
    // Arrange
    const word = "  a S eiou > ?  ";
    const expectedOutput = "_s____";


    // Act
    const output = removeVowels(word);

    // Assert
    expect(output).toEqual(expectedOutput);
  });

  it("remove vowels from word and dont modify original", () => {
    // Arrange
    const word = "samuel";
    const unchangedWord = word;
    const expected = "s_m__l";

    // Act
    const output = removeVowels(word);

    // Assert
    expect(output).toEqual(expected);
    expect(word).toEqual(unchangedWord);
  });
});
