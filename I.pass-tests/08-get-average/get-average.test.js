const {average} = require("./get-average");

describe("Average function", () => {
  it("For the numbers [4, -, 8, 11, hello, 57, 0, 2] it will return 5", () => {
    //arrange
    const numbers = [4, "-", 8, 11, "hello", "57", 0, 2];
    const expected = 5;

    //act
    const output = average(numbers);

    //assert
    expect(output).toEqual(expected);
  });

  it("If numbers is not an array it will throw an error",() => {
    //arrange
    const numbers = "mouse";
      
    //act and assert
    expect(() => average()).toThrow("Error");
    
  });

  it("If the function does not receive parameters, it will throw an error.",() => {
    
    //act and assert
    expect(() => average()).toThrow("Error");
    
  });
});
