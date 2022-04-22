// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];

const { getEven } = require("./get-even-numbers");

describe("Get even numbers", () => {
  it("Should be an array", () => {
    expect(getEven("")).toBe("Not an array");
    expect(getEven(true)).toBe("Not an array");
    expect(getEven(false)).toBe("Not an array");
    expect(getEven(null)).toBe("Not an array");
    expect(getEven(undefined)).toBe("Not an array");
    expect(getEven({})).toBe("Not an array");
    expect(getEven(() => {})).toBe("Not an array");
    expect(getEven(1)).toBe("Not an array");
  });

  it("should return empty array if input is empty", () => {
    expect(getEven([])).toEqual("Empty array");
  });

  it("Ignore not valids inputs", () => {
    const array = [3, 21, 88, 4, 36, undefined, NaN, "string", {}, [], null];
    const expected = [88, 4, 36];

    const output = getEven(array);

    expect(output).toEqual(expected);
  });

  it("Should return even numbers without modify original array, for [1,2,3,4] return [2,4]", () => {
    const array = [1, 2, 3, 4];
    const arrayUnmodified = [1, 2, 3, 4];
    const expected = [2, 4];

    const output = getEven(array);

    expect(output).toEqual(expected);
    expect(array).toEqual(arrayUnmodified);
  });
});
