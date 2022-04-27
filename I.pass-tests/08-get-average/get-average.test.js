const { getAverage } = require("./get-average");

describe("Get average", () => {
  it("return only numbers", () => {
    const numbers = [4, 6, 8, 10, "a", "b", "c", {}, []];
    const unchangedNumbers = [4, 6, 8, 10, "a", "b", "c", {}, []];
    const expected = 7;

    const output = getAverage(numbers);

    expect(output).toEqual(expected);
    expect(numbers).toEqual(unchangedNumbers);
  });

  it("Correct return of average, for 4,6,8,10 should be return 7", () => {
    const numbers = [4, 6, 8, 10];
    const unchangedNumbers = [4, 6, 8, 10];
    const expected = 7;

    const output = getAverage(numbers);

    expect(output).toEqual(expected);
    expect(numbers).toEqual(unchangedNumbers);
  });
});
