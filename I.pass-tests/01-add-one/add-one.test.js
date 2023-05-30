const {addOne} = require("./add-one.js");

describe("addOne function. Add 1 to each item in myArray ", () => {
  it("For the array [31, 57, 12, 5] it will return [32, 58, 13, 6]",() => {
    //arrange
    const myArray = [31, 57, 12, 5];
    const unchanged = [31, 57, 12, 5];
    const expected = [32, 58, 13, 6];

    //act
    const output = addOne(myArray);

    //assert
    expect(output).toEqual(expected);
    expect(myArray).toEqual(unchanged);
  });

  it("If myArray is not an array it will throw an error",() => {
    //arrange
    const myArray = 4;
    const unchanged = [31, 57, 12, 5];
    const expected = [32, 58, 13, 6];

    //act and assert
    expect(() => addOne()).toThrow("Error");

  });

  it("If the function does not receive parameters, it will throw an error.", () => {
    //act and assert
    expect(() => addOne()).toThrow("Error");
});

});
