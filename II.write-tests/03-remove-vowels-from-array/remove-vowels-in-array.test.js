const removeVowelsForWords = require("./remove-vowels-in-array");

describe("Remove vowels of words in a array", () => {
  it("empty array return a mesage", () => {
    const words = [];
    const expected = "Not exist a array or array is empty";

    const output = removeVowelsForWords(words);

    expect(output).toEqual(expected);
  });

  it("Check input is an valid input or return empty array default", () => {
    const invalidWords = [
      {},
      true,
      false,
      null,
      undefined,
      1,
      2.5,
      NaN,
      Infinity,
    ];
    const expectedOutput = [];

    const output = removeVowelsForWords(invalidWords);

    expect(output).toEqual(expectedOutput);
  });

  it("remove vowels from all words in array", () => {
    const words = ["Irina", "Etza", "Daniel", "D a R", "aLf oer", "@>o1wtpq."];
    const expected = ["rn", "tz", "dnl", "dr", "lfr", "wtpq"];

    const result = removeVowelsForWords(words);

    expect(result).toEqual(expected);
  });
});
