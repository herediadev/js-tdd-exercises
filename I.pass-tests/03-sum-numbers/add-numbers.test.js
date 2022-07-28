const { addNumbers } = require("./add-numbers");
describe("add-numbers function", () => {
  it("given the input [9, 23, 10, 3, 8], should return the sum 53", () => {
    //arrange
    const numbers = [9, 23, 10, 3, 8];
    const expected = 53;
    //act
    const output = addNumbers(numbers);
    //assert
    expect(output).toEqual(expected);
  });

  it("given the input 'helo word', should throw an error", () => {
    //arrange
    const numbers = "helo word";
    const output = () => addNumbers(numbers);
    //act and assert
    expect(output).toThrow(Error);
  });

  it("given the input [true, true, true], should throw an error", () => {
    //arrange
    const numbers = [true, true, true];
    const output = () => addNumbers(numbers);
    //act and assert
    expect(output).toThrow(Error);
  });
});