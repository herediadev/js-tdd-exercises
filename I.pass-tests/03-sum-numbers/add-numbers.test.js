const {addNumbers} = require("./add-numbers");

describe("Función addNumbers", () => {
  it("Add all numbers", () => {
    //arrange
    const numbers = [9, 23, 10, 3, 8];
    const expected = 53;

    //act
    const output = addNumbers(numbers);

    //assert
    expect(output).toEqual(expected);
  });
});
