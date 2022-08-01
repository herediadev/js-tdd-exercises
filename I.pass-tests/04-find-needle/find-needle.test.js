const { findWordsIndex } = require("./find-needle");
describe("find word index in function", () => {
  it("given the input ['house', 'train', 'slide', 'needle', 'book'] Find the index of the word needle", () => {
    //arrange
    const words = ["house", "train", "slide", "needle", "book"];
    const expected = 3;
    //act
    const output = findWordsIndex(words, "needle");
    //assert
    expect(output).toEqual(expected);
  });

  it("given the input ['plant', 'shelf', 'arrow', 'bird'] Find the index of the word needle", () => {
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

});