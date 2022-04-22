const { getAverage } = require("./get-average");

describe("Average", () => {
  it("should return average", () => {
    const numbers = [4, 6, 8, 10];
    const unchangedNumbers = [4, 6, 8, 10];
    const expected = 7;

    const output = getAverage(numbers);

    expect(output).toEqual(expected);
    expect(numbers).toEqual(unchangedNumbers);
  });

  it("return only numbers", () => {
    const numbers = [4, 6, 8, 10, "a", "b", "c", {}, []];
    const unchangedNumbers = [4, 6, 8, 10, "a", "b", "c", {}, []];
    const expected = 7;

    const output = getAverage(numbers);

    expect(output).toEqual(expected);
    expect(numbers).toEqual(unchangedNumbers);
  });

  // it should return 0 if there are no numbers
});
