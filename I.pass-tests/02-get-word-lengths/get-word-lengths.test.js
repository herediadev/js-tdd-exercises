const { getWordLengths } = require("./get-word-lengths");

describe("Function getWordLenghts receives an array of words and returns an array of numbers representing the length of each word.", () => {
  it("Given invalid input, it should throw an error with the message 'I need an array to work :('.", () => {
    const testArray1 = false;
    const testArray2 = 2;
    const testArray3 = true;
    const testArray5 = undefined;
    const testArray6 = null;
    const testArray7 = {};
    const testArray8 = NaN;
    const testArray9 = [];

    const output = () => {
      // Act
      getWordLengths(testArray1);
      getWordLengths(testArray2);
      getWordLengths(testArray3);
      getWordLengths(testArray5);
      getWordLengths(testArray6);
      getWordLengths(testArray7);
      getWordLengths(testArray8);
      getWordLengths(testArray9);
    };

    // Assert
    expect(output).toThrowError("I need an array to works :(");
  });

  it("Given an array of valid elements and invalid elements, you must filter and work with the existing valid elements.", () => {
    // Arrange
    const words = ["a", 2, {}, [], true, false, null, undefined, 1, NaN];
    const unchanged = ["a", 2, {}, [], true, false, null, undefined, 1, NaN];
    const expected = [1];

    // Act
    const output = getWordLengths(words);
    const output2 = getWordLengths([]);
    const output3 = getWordLengths([NaN, NaN]);

    // Assert
    expect(output).toEqual(expected);
    expect(output2).toEqual([]);
    expect(output3).toEqual([]);
    expect(words).toEqual(unchanged);
  });

  it("For array ['a', 'long', 'sentence'] it will return [1,2,8] and dont changue the original entry.", () => {
    // Arrange
    const words = ["a", "long", "sentence"];
    const unchanged = ["a", "long", "sentence"];
    const expected = [1, 4, 8];

    // Act
    const output = getWordLengths(words);

    // Assert
    expect(output).toEqual(expected);
    expect(words).toEqual(unchanged);
  });
});
