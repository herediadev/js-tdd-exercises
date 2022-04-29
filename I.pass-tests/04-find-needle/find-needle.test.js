const { findWord } = require("./find-needle");

describe("The findWord function is used to find a string in an array of strings.", () => {
  it("Given an array of strings we must normalize both parameters before performing the search, so for this function the word 'NeEDL E' is not different from 'N EEDLE' and match it correctly", () => {
    // Arrange
    const words = [
      "h ay",
      "juNk",
      "ha  ystack",
      "N EEDLE",
      "mOre Junk",
      "randomJunk",
    ];
    const searchWord = "NeEDL E";
    const expected = 3;

    // Act
    const output = findWord(words, searchWord);

    // Assert
    expect(output).toEqual(expected);
  });

  it("Given a string of words we must do a reduction of all the repeated terms.", () => {
    // Arrange
    const words = ["hay", "Ha y", "HAY"];
    const searchWord = "hay";
    const expected = 0;

    // Act
    const output = findWord(words, searchWord);

    // Assert
    expect(output).toEqual(expected);
  });

  it("Given an array of words find the word 'needle' in it and leave the original array unchanged.", () => {
    // Arrange
    const words = [
      "hay",
      "junk",
      "haystack",
      "needle",
      "moreJunk",
      "randomJunk",
    ];
    const unchangedWords = [
      "hay",
      "junk",
      "haystack",
      "needle",
      "moreJunk",
      "randomJunk",
    ];
    const searchWord = "needle";
    const expected = 3;

    // Act
    const output = findWord(words, searchWord);

    // Assert
    expect(output).toEqual(expected);
    expect(words).toEqual(unchangedWords);
  });
});
