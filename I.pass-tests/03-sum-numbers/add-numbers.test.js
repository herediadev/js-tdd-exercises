const {addAllNumbers} = require("./add-numbers");

describe("addAllNumbers function. Add all numbers", () => {
  it("for the array [9, 23, 10, 3, 8] it will return 53", () => {
    //arrange
    const numbers = [9, 23, 10, 3, 8];
    const expected = 53;

    //act
    const output = addAllNumbers(numbers);

    //assert
    expect(output).toEqual(expected);
  });

  it("If numbers is not an array it will throw an error",() => {
    //arrange
    const numbers = 4;
      
    //act and assert
    expect(() => addAllNumbers()).toThrow("Error");
    
  });

  it("If the function does not receive parameters, it will throw an error.", () => {
    //act and assert
    expect(() => addAllNumbers()).toThrow("Error");
});
});
