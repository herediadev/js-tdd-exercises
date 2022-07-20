const {findWordsIndex} = require("./find-needle");
describe("find word index in function", () => {
  it("Find the needle", () => {
    const words = ["house", "train", "slide", "needle", "book"];
    const expected = 3;
    const output = findWordsIndex(words, "needle");
  expect(output).toEqual(expected);
  });
  
  it("Find the plant", () => {
    const words = ["plant", "shelf", "arrow", "bird"];
    const expected = 0;
    const output = findWordsIndex(words, "plant");
  expect(output).toEqual(expected);
  });
});