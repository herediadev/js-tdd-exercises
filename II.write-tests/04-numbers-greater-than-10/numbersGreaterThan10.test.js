const { numbersGreaterThan10 } = require("./numbersGreaterThan10");

describe("Get numbers more than 10", () => {
  it("empty array return a mesage", () => {
    // Arrange
    const array = [];

    // Act
    const output = numbersGreaterThan10(array);

    // Expect
    expect(output).toEqual("Empty array");
  });

  it("Every parameter will not a number is ignored", () => {
    // Arrange
    const array = [4, 10, 32, 9, 21, {}, "string", true, null, undefined, NaN];
    const expected = [32, 21];

    // Act
    const output = numbersGreaterThan10(array);

    // Expect
    expect(output).toEqual(expected);
  });

  it("Get numbers greater than 10 and dont modify original array, for ['4', '10', '32', '9', '21'] should be return ['32', '21']", () => {
    const array = [4, 10, 32, 9, 21];
    const unchangedArray = [4, 10, 32, 9, 21];
    const expected = [32, 21];

    const actual = numbersGreaterThan10(array);

    expect(actual).toEqual(expected);
    expect(array).toEqual(unchangedArray);
  });
});
