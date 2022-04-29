const { addOne } = require("./add-one.js");

describe("The addOne function receives an array of numberrs and returns an array of all numbers + 1.", () => {
  it("For invalid entries it will throw an error with message 'I need an array to works :('.", () => {
    // Arrange
    const testArray1 = false;
    const testArray2 = "pepe";
    const testArray3 = true;
    const testArray5 = undefined;
    const testArray6 = null;
    const testArray7 = {};
    const testArray8 = NaN;
    const testArray9 = [];

    const output = () => {
      // Act
      addOne(testArray1);
      addOne(testArray2);
      addOne(testArray3);
      addOne(testArray5);
      addOne(testArray6);
      addOne(testArray7);
      addOne(testArray8);
      addOne(testArray9);
    };

    // Assert
    expect(output).toThrowError("I need an array to works :(");
  });

  it("Given an array of valid elements and invalid elements, you must filter and work with the existing valid elements.", () => {
    // Arrange
    const testArray = [
      1,
      2,
      "3",
      "pepe",
      {},
      [],
      true,
      false,
      null,
      undefined,
      NaN,
    ];
    const expected = [2, 3];

    // Act && Assert
    expect(addOne(testArray)).toEqual(expected);
  });

  it("For input [1,2,3] it should return [2,3,4] and should not perform any mutation on the original input.", () => {
    // Arrange
    const testArray = [1, 2, 3];
    const unchangedArray = [1, 2, 3];
    const expected = [2, 3, 4];

    // Act && Assert
    expect(addOne(testArray)).toEqual(expected);
    expect(testArray).toEqual(unchangedArray);
  });
});
