const { findWord } = require("./find-needle");

describe("Will be search a word in array", () => {
  it("Parse and normalize words and search word for example match 'NEEDLE'  with 'NeEDL E'.", () => {
    const words = [
      "hay",
      "junk",
      "haystack",
      "NEEDLE",
      "moreJunk",
      "randomJunk",
    ];
    const searchWord = "NeEDL E";
    const expected = 3;

    const output = findWord(words, searchWord);

    expect(output).toEqual(expected);
  });

  // test for repeat words

  it("In a array of words encounter 'needle' and dont modify original array.", () => {
    const words = [
      "hay",
      "junk",
      "haystack",
      "needle",
      "moreJunk",
      "randomJunk",
    ];
    const unchangedWords = [
      "hay",
      "junk",
      "haystack",
      "needle",
      "moreJunk",
      "randomJunk",
    ];

    const searchWord = "needle";
    const expected = 3;

    const output = findWord(words, searchWord);

    expect(output).toEqual(expected);
    expect(words).toEqual(unchangedWords);
  });
});
