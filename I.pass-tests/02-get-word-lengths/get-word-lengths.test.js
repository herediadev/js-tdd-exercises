const { getWordLengths } = require("./get-word-lengths");
describe("get-word-lengths function", () => {
  it("should return a new array [3, 6, 10, 5], with the number of characters in each word", () => {
    //arrange
    const words = ["sun", "potato", "roundabout", "pizza"];
    const expected = [3, 6, 10, 5];
    //act
    const output = getWordLengths(words);
    //assert
    expect(output).toEqual(expected);
  });

  it("given the input different of type array, should throw an error", () => {
    //arrange
    const words = "sun";
    //act
    const output = () => getWordLengths(words);
    //assert
    expect(output).toThrow(Error);
  });

  it("given the input [true, 2, null], should throw an error", () => {
    //arrange
    const input = [true, 2, null];
    const output = () => addOne(input);
    //act and assert
    expect(output).toThrow(Error);
  });
});
