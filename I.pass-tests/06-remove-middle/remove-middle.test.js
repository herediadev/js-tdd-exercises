const { removeMiddle } = require("./remove-middle");

describe("Remove middle function", () => {
  it("should return a new array ['mouse, 'giraffe', 'window', 'bottle'] for expectedWords", () => {
    //arrange
    const words = ["mouse", "giraffe", "queen", "window", "bottle"];
    const expectedWords = ["mouse", "giraffe", "window", "bottle"];
    const expectedOutput = ["queen"];
    //act
    const output = removeMiddle(words);
    //assert
    expect(output).toEqual(expectedOutput);
    expect(words).toEqual(expectedWords);
  });
});