const { secondLargest } = require("./second-largest");

describe("Second largest function", () => {

  it("given an array [2, 0, 23, 0, 57, 1, 230], should return 57", () => {
    //assert
    const numbers = [2, 0, 23, 0, 57, 1, 230];
    const expected = 57;
    //act
    const output = secondLargest(numbers);
    //assert
    expect(output).toEqual(expected);

  });

  it("given the array [2, 0, 23, 0, 57, 1, 230], is not acepted [2, 0, 23, 0, 57, 1, 230]", () => {
    //arrange
    const numbers = [2, 0, 23, 0, 57, 1, 230];
    const isNotAcepted = [2, 0, 23, 0, 57, 1, 230];
    //act
    const output = secondLargest(numbers);
    //assert
    expect(output).not.toEqual(isNotAcepted);
  });



  it("given the input('hola'), should  throw an error", () => {
    //arrange
    const input = "hola";
    const output = () => secondLargest(input);
    //act and assert
    expect(output).toThrow(Error);
  });

  it("given an empty input(undefined), should throw an error", () => {
    //arrange
    const input = undefined;
    const output = () => secondLargest(input);
    //act and assert
    expect(output).toThrow(Error);
  });

  it("given the input null, should throw an error", () => {
    //arrange
    const input = null;
    const output = () => secondLargest(input);
    //act and assert
    expect(output).toThrow(Error);
  });
})

// como encontrar error de último numero???