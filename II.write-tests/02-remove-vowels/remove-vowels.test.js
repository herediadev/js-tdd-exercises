const {removeVowels} = require("./remove-vowels")

describe("remove vowels from word", () => {
  it("For the 'samuel' it will return 's_m__l' ", () => {
    // Arrange
    const word = "samuel";
    const expected = "s_m__l"

    // Act
    const result = removeVowels(word);

    // Assert
    expect(result).toEqual(expected);

  });
});
