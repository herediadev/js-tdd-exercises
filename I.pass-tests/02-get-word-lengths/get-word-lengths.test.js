const {getWordLengths} = require("./get-word-lengths");

describe("getWordLengths function. Get word lengths", () => {
  it("for the array [sun, potato, roundabout, pizza] it will return [3, 6, 10, 5]",() => {
    //arrange
    const someWords = ["sun", "potato", "roundabout", "pizza"];
    const expected = [3, 6, 10, 5];

    //act
    const output = getWordLengths(someWords);

    //assert
    expect(output).toEqual(expected);
    expect(Array.isArray(someWords)).toBe(true);
  });

  it("If myArray is not an array it will throw an error",() => {
    //arrange
    const myArray = "potato";
    const expected = [3, 6, 10, 5];
      
    //act and assert
    expect(() => getWordLengths()).toThrow("Error");
    
  });

  it("If the function does not receive parameters, it will throw an error.", () => {
    //act and assert
    expect(() => getWordLengths()).toThrow("Error");
});
});
