const {addNumbers} = require("./add-numbers");
describe("add-numbers function", () => {
  it("add all the numbers in the array", () => {
    const numbers = [9, 23, 10, 3, 8];
    const expected = 53;
    const output = addNumbers(numbers);
  expect(output).toEqual(expected);
  });
});