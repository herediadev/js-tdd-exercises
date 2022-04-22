// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed

const getSecondThird = require("./get-second-third");

describe("Get the second and third smallest numbers in array", () => {
  it("Not an array return a message", () => {
    const array = "Not an array";

    const output = getSecondThird(array);

    expect(output).toEqual("Not an array");
  });

  it("empty array return a mesage", () => {
    const array = [];

    const output = getSecondThird(array);

    expect(output).toEqual("Empty array");
  });

  it("Every parameter will not a number is ignored", () => {
    const array = [4, 10, 32, 9, 21, {}, "string", true, null, undefined, NaN];
    const expected = [9, 10];

    const output = getSecondThird(array);

    expect(output).toEqual(expected);
  });

  it("Get second and third smallest numbers [1,2,3] should be [2,3], and dont modify original", () => {
    const array = [1, 2, 3];
    const unchangedArray = [1, 2, 3];
    const expected = [2, 3];

    const actual = getSecondThird(array);

    expect(actual).toEqual(expected);
    expect(array).toEqual(unchangedArray);
  });
});
