const {secondLargest} = require("./second-largest");

describe("Second largest", () => {
  it("For the array [2, 0, 23, 0, 57, 1, 230] it will return 57", () => {
    //arrange
    const numbers = [2, 0, 23, 57, 0, 1, 230];

    //act
    const output = secondLargest(numbers);

    //assert
    expect(output).toEqual(57);
  });

  it("If numbers is not an array it will throw an error",() => {
    //arrange
    const numbers = "mouse";
      
    //act and assert
    expect(() => secondLargest()).toThrow("Error");
    
  });

  it("If the function does not receive parameters, it will throw an error.",() => {
    
    //act and assert
    expect(() => secondLargest()).toThrow("Error");
    
  });
});
