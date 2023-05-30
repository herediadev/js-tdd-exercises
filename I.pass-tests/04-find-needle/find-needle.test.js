const {findNeedle} = require("./find-needle");

describe("needle function. Find the needle", () => {
  it("For the array [house, train, slide, needle, book] it will return 3",() => {
    const words = ["house", "train", "slide", "needle", "book"];
    const expected = 3;

    const output = findNeedle(words, "needle");
    expect(output).toEqual(expected);
  });

  it("Find the plant", () => {
    const words = ["plant", "shelf", "arrow", "bird"];
    const expected = 0;

    const output = findNeedle(words, "plant");
    expect(output).toEqual(expected);
  });
});
