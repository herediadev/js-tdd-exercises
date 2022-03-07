const { fizzbuzz } = require("./fizz-buzz");

describe("prints 1", () => {
  it("prints 1", () => {
    //Arrange
    const number = 1;
    const expected = "1";


    //Act
    const result = fizzbuzz(number);

    //Assert
    expect(result).toEqual(expected);
  });

  it("prints 1,2", () => {
    //Arrange
    const number = 2;
    const expected = "1, 2";

    //Act
    const result = fizzbuzz(number);

    //Assert
    expect(result).toEqual(expected);
  });
});
