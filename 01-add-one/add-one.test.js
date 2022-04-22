const { addOne } = require("./add-one.js");

describe("Given the addOne function", () => {
  it("Its not a array", () => {
    const testArray = "pepe";

    const output = () => addOne(testArray);

    expect(output).toThrowError("Its not array");
  });

  it("Filter only numbers and ignore other types of values or return empty array", () => {
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
    const unchangedArray = [
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

    const output = addOne(testArray);
    const output2 = addOne([]);

    expect(output).toEqual(expected);
    expect(output2).toEqual([]);
    expect(testArray).toEqual(unchangedArray);
  });

  it("For the input [1,2,3] should return [2,3,4] and keeping the original input", () => {
    const testArray = [1, 2, 3];
    const unchangedArray = [1, 2, 3];
    const expected = [2, 3, 4];

    const output = addOne(testArray);

    expect(output).toEqual(expected);
    expect(testArray).toEqual(unchangedArray);
  });
});
