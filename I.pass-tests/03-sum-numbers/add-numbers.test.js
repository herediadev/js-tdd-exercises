const { sumNumbers } = require("./add-numbers");

describe("Add all numbers of a array", () => {
  it("Verify if is posible add this type of data or ignorated, default result is 0", () => {
    const numbers = [1, 2, "3", undefined, null, true, false, {}, [], 4, NaN];
    const unchanged = [1, 2, "3", undefined, null, true, false, {}, [], 4, NaN];
    const expected = 7;

    const output = sumNumbers(numbers);

    expect(output).toEqual(expected);
    expect(numbers).toEqual(unchanged);
    expect(sumNumbers([])).toEqual(0);
    expect(sumNumbers([NaN, NaN])).toEqual(0);
  });

  it("For the input [1,2,3,4,5] should be return 15 and keeping original array.", () => {
    const numbers = [1, 2, 3, 4, 5];
    const unchanged = [1, 2, 3, 4, 5];
    const expected = 15;

    const output = sumNumbers(numbers);

    expect(output).toEqual(expected);
    expect(numbers).toEqual(unchanged);
  });
});
