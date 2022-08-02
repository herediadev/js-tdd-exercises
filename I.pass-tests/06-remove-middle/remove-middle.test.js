const { removeMiddle } = require("./remove-middle");

describe("Remove middle function", () => {
  it("Given the array['mouse, 'giraffe','queen', 'window', 'bottle'], should return queen", () => {
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