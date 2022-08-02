const { findWordsIndex } = require("./find-needle");
describe("find word index in function", () => {
  it("given the input ['house', 'train', 'slide', 'needle', 'book'], should return index 3", () => {
    //arrange
    const words = ["house", "train", "slide", "needle", "book"];
    const expected = 3;
    //act
    const output = findWordsIndex(words, "needle");
    //assert
    expect(output).toEqual(expected);
  });

  it("given the input ['plant', 'shelf', 'arrow', 'bird']should return index 0", () => {
    //arrange
    const words = ["plant", "shelf", "arrow", "bird"];
    const expected = 0;
    //act
    const output = findWordsIndex(words, "plant");
    //assert
    expect(output).toEqual(expected);
  });

  it("given the input null, should throw an error", () => {
    //arrange
    const words = null;
    const output = () => findWordsIndex(words);
    //act and assert
    expect(output).toThrow(Error);
  });

  it("given the array[10, 20, 30], should throw an error", () => {
    //arrange
    const words = [10, 20, 30];
    const output = () => findWordsIndex(words);
    //act and assert
    expect(output).toThrow(Error);
  });

  it("given the array[true, true, false], should throw an error", () => {
    //arrange
    const words = [true, true, false];
    const output = () => findWordsIndex(words);
    //act and assert
    expect(output).toThrow(Error);
  });

});