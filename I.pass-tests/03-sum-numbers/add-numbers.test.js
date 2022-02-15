const {addAllNumbers} = require("./add-numbers");

describe("Función addAllNumbers", () => {
  it("Add all numbers", () => {
    //arrange
    const numbers = [9, 23, 10, 3, 8];
    const expected = 53;

    //act
    const output = addAllNumbers(numbers);

    //assert
    expect(output).toEqual(expected);
  });
});
