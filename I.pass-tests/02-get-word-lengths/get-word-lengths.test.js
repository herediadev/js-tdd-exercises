const {getWordLengths} = require("./get-word-lengths");

describe("Función getWordLengths", () => {
  it("Get word lengths",() => {
    //arrange
    const someWords = ["sun", "potato", "roundabout", "pizza"];
    const expected = [3, 6, 10, 5];

    //act
    const output = getWordLengths(words);

    //assert
    expect(output).toEqual(expected);
    expect(Array.isArray(someWords)).toBe(true);
  });
});
