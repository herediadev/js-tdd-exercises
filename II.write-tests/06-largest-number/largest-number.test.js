const { getLargestNumber } = require("./largest-number");

describe("Largest number function", () => {
  it("For the [3, 21, 88, 4, 36] it will return 88", () => {
    // Arrange
    const input = [3, 21, 88, 4, 36];
    const expected = 88;

    // Act
    const result = getLargestNumber(input);

    // Assert
    expect(result).toEqual(expected);
  });

  it("if array has less than 2 elements it will throw error", () => {
    //arrange
    const input = [1];

    //act
    const expectedResult = () => getLargestNumber(input);

    //assert
    expect(expectedResult).toThrow("Error");

  });

  it("If input is not an array it will throw an error", () => {
    //arrange
    const input = "mouse";

    //act and assert
    expect(() => getLargestNumber()).toThrow("Error");

  });

  it("If the function does not receive parameters, it will throw an error.", () => {

    //act and assert
    expect(() => getLargestNumber()).toThrow("Error");

  });
});
// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
