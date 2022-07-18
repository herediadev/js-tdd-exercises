const wordLengths = require("./get-word-lengths");
describe("get-word-lengths function", () => {
  it("should return a new array with the number of characters in each word", () => {
    const words = ["sun", "potato", "roundabout", "pizza"];
    const expected = [3, 6, 10, 5];
    const output = wordLengths(words);
  expect(output).toEqual(expected);
  });
});