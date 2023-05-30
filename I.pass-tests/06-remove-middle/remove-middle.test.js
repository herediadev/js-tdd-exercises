const {removeMiddle} = require("./remove-middle");

describe("Remove middle function", () => {

  it("For the array [mouse, giraffe, queen, window, bottle] it will return [queen]", () => {
    //arrange
    const words = ["mouse", "giraffe", "queen", "window", "bottle"];
    const expectedWords = ["mouse", "giraffe", "window", "bottle"];
    const expectedOutput = ["queen"];

    //act
    const output = removeMiddle(words);

    //assert
    expect(output).toEqual(expectedOutput);
    expect(words).toEqual(expectedWords);
  });

  it("If words is not an array it will throw an error",() => {
    //arrange
    const words = "mouse";
      
    //act and assert
    expect(() => removeMiddle()).toThrow("Error");
    
  });

  it("If the function does not receive parameters, it will throw an error.",() => {
    
    //act and assert
    expect(() => removeMiddle()).toThrow("Error");
    
  });
});
