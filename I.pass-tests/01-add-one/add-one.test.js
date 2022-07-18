const {addOne} = require("./add-one.js");
describe("add-one function", () => {
  const myArray = [31, 57, 12, 5];
  const unchanged = [31, 57, 12, 5];
  const expected = [32, 58, 13, 6];
    it("should return a new array and add 1 to each item",() => {
      const output = addOne(myArray);
    expect(output).toEqual(expected);
    });
    it("should not change myArray value",() => {
      addOne(myArray);
      expect(myArray).toEqual(unchanged);
    });
})

