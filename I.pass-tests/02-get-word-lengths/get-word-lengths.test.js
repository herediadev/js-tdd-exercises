const { getWordLengths } = require("./get-word-lengths");

describe("Show me the length of words", () => {
  it("Its not a array", () => {
    const testArray = "pepe";

    const output = () => getWordLengths(testArray);
    const output2 = () => getWordLengths('');

    expect(output).toThrowError("Its not a array");
    expect(output2).toThrowError("Its not a array");
  });

  it("Filter only strings or return a empty array or return a empty array if none is valid or is lenght == 0", () => {
    const words = ["a", 2, {}, [], true, false, null, undefined, 1, NaN];
    const unchanged = ["a", 2, {}, [], true, false, null, undefined, 1, NaN];
    const expected = [1];

    const output = getWordLengths(words);
    const output2 = getWordLengths([]);
    const output3 = getWordLengths([NaN, NaN]);
 

    expect(output).toEqual(expected);
    expect(output2).toEqual([]);
    expect(output3).toEqual([]);
    expect(words).toEqual(unchanged);
  });

  it("Get lenght of array strings, for input [ a, long, sentence ] will be [1, 4, 8], and dont changue the first array", () => {
    const words = ["a", "long", "sentence"];
    const unchanged = ["a", "long", "sentence"];
    const expected = [1, 4, 8];

    const output = getWordLengths(words);

    expect(output).toEqual(expected);
    expect(words).toEqual(unchanged);
  });
});
