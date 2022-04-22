// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed

const getLargestNumber = require("./largest-number");

describe("Get the most big number in a array", () => {
  it("Its not an array should invalid input", () => {
    expect(getLargestNumber("")).toBe("Invalid input");
    expect(getLargestNumber(true)).toBe("Invalid input");
    expect(getLargestNumber(false)).toBe("Invalid input");
    expect(getLargestNumber(null)).toBe("Invalid input");
    expect(getLargestNumber(undefined)).toBe("Invalid input");
    expect(getLargestNumber({})).toBe("Invalid input");
    expect(getLargestNumber(() => {})).toBe("Invalid input");
    expect(getLargestNumber(1)).toBe("Invalid input");
  });

  it("Empty array should be most a message", () => {
    expect(getLargestNumber([])).toBe("Empty array");
  });

  it("Ignore invalid inputs", () => {
    const array = [3, 21, 88, 4, 36, undefined, NaN, "string", {}, [], null];
    const expected = 88;

    const result = getLargestNumber(array);

    expect(result).toBe(expected);
  });

  it("Get largest number and dont change the original", () => {
    const array = [4, 10, 32, 9, 21];
    const unchangedArray = [4, 10, 32, 9, 21];
    const expected = 32;

    const output = getLargestNumber(array);

    expect(output).toBe(expected);
    expect(array).toEqual(unchangedArray);
  });
});
