const { removeMiddle } = require("./remove-middle");

describe("Remove middle function", () => {
  it("should return a new array ['mouse, 'giraffe','queen', 'window', 'bottle'] for expectedWords", () => {
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

  /* it("should return a new array ['mouse, 'giraffe', 'queen', 'window', 'bottle', 'house', 'black'] for expectedWords", () => {
    //arrange
    const words = ["mouse", "giraffe", "queen", "window", "bottle", "house","black"];
    const expectedWords = ["mouse", "giraffe", "queen", "bottle", "house", "black"];
    const expectedOutput = ["window"];
    //act
    const output = removeMiddle(words);
    //assert
    expect(output).toEqual(expectedOutput);
    expect(words).toEqual(expectedWords);
  }); */

  it("given an array['mouse, 'giraffe', 'queens', 'window'] should throw an error", () => {
    //arrange
    const words = ["mouse", "giraffe", "queen", "window"];
    const output = () => removeMiddle(words);
    // act and assert
    expect(output).toThrow(Error);
  });

  it('given an input undefined, should throw an error', () => {
    //arrange
    const input = undefined;
    const output = () => removeMiddle(input);
    //act and assert
    expect(output).toThrow(Error);
  });

  it('given an array length different a 5, should throw an error', () => {
    //arrange
    const arrayLength = 6;
    const output = () => removeMiddle(arrayLength);
    //act and assert
    expect(output).toThrow(Error);
  });
});