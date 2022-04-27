const { removeMiddle } = require("./remove-middle");

describe("Remove the middle word in a array", () => {
  it("Verify if elements are valids and ignore others, if dont have elements valids the default value is a empty string", () => {
    const words = [
      {},
      [],
      true,
      false,
      null,
      undefined,
      1,
      1.5,
      "a",
      "b",
      "c",
      NaN,
    ];
    
    const expectedOutput = "b";

    const output = removeMiddle(words);
    const output2 = removeMiddle([]);
    const output3 = removeMiddle(undefined);
    const output4 = removeMiddle(null);
    const output5 = removeMiddle(NaN);
    const output6 = removeMiddle(1);
    const output7 = removeMiddle(1.5);
    const output8 = removeMiddle("a");

    expect(output).toEqual(expectedOutput);
    expect(output2).toEqual("");
    expect(output3).toEqual("");
    expect(output4).toEqual("");
    expect(output5).toEqual("");
    expect(output6).toEqual("");
    expect(output7).toEqual("");
    expect(output8).toEqual("");
  });

  it("should remove the middle word regardless of capital letters or spaces", () => {
    const words = ["mouse", "giraffe", "Queen", "window", "bottle"];
    const unchangedWords = ["mouse", "giraffe", "Queen", "window", "bottle"];
    const expectedOutput = "queen";

    const output = removeMiddle(words);

    expect(output).toEqual(expectedOutput);
    expect(words).toEqual(unchangedWords);
  });
});
