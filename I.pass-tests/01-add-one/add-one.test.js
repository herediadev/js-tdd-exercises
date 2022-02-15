const {addOne} = require("./add-one.js");

describe("Función addOne", () => {
  it("Add 1 to each item in myArray",() => {
    //arrange
    const myArray = [31, 57, 12, 5];
    const unchanged = [31, 57, 12, 5];
    const expected = [32, 58, 13, 6];

    //act
    const output = addOne(myArray);

    //assert
    expect(output).toEqual(expected);
    expect(myArray).toEqual(unchanged);
    expect(Array.isArray(myArray)).toBe(true);
  });
});
