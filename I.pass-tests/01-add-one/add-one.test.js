const { addOne } = require("./add-one.js");
describe("add-one function", () => {
  it("given the input [31, 57, 12, 5], adding 1 to each item should return [32, 58, 13, 6]", () => {
    //arrange
    const myArray = [31, 57, 12, 5];
    const expected = [32, 58, 13, 6];
    //act
    const output = addOne(myArray);
    //assert
    expect(output).toEqual(expected);
  });
  it("given the input [31, 57, 12, 5], should not change the input value", () => {
    //arrange
    const myArray = [31, 57, 12, 5];
    const unchanged = [31, 57, 12, 5];
    //act
    addOne(myArray);
    //assert
    expect(myArray).toEqual(unchanged);
  });

  it("given the input [], should return []", () => {
    //arrange
    const input = [];
    //act
    const output = addOne(input);
    //assert
    expect(output).toEqual(input);
  });

  it("given an empty input(undefined), should throw an error", () => {
    //arrange
    const input = undefined;
    const output = () => addOne(input);
    //act and assert
    expect(output).toThrow(Error);
  });

  it("given the input null, should throw an error", () => {
    //arrange
    const input = null;
    const output = () => addOne(input);
    //act and assert
    expect(output).toThrow(Error);
  });

  it("given the input string 'hola', should throw an error", () => {
    //arrange
    const input = "hola";
    const output = () => addOne(input);
    //act and assert
    expect(output).toThrow(Error);
  });

  it("given the input [true, true, true], should throw an error", () => {
    //arrange
    const input = [true, true, true];
    const output = () => addOne(input);
    //act and assert
    expect(output).toThrow(Error);
  });

  it("given the input [null, null, null], should throw an error", () => {
    //arrange
    const input = [null, null, null];
    const output = () => addOne(input);
    //act and assert
    expect(output).toThrow(Error);
  });

  it("given the input ['hola', 'frutilla', 'null'], should throw an error", () => {
    //arrange
    const input = ["hola", "frutilla", "null"];
    const output = () => addOne(input);
    //act and assert
    expect(output).toThrow(Error);
  });


  it("given the input ['hola', null, 1], should throw an error", () => {
    //arrange
    const input = ["hola", null, 1];
    const output = () => addOne(input);
    //act and assert
    expect(output).toThrow(Error);
  });

})

