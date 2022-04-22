const { removeVowels } = require("./remove-vowels");

describe("Remove vowels of a string", () => {
  it("Check input is a string or return a message", () => {
    const invalidWords = [
      {},
      [],
      true,
      false,
      null,
      undefined,
      1,
      2.5,
      NaN,
      Infinity,
    ];
    const expectedOutput = "Not a string";

    const output = removeVowels(invalidWords);

    expect(output).toEqual(expectedOutput);
  });

  it("ignore spaces and special characters and make lowercase", () => {
    const word = "  a S eiou > ?  ";
    const expectedOutput = "_s____";

    const output = removeVowels(word);

    expect(output).toEqual(expectedOutput);
  });

  it("remove vowels from word and dont modify original", () => {
    const word = "samuel";
    const unchangedWord = word;
    const expected = "s_m__l";

    const output = removeVowels(word);

    expect(output).toEqual(expected);
    expect(word).toEqual(unchangedWord);
  });
});
