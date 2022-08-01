const { average } = require("./get-average");

describe("get-Average function", () => {
  it("Given the array [4, " - ", 8, 11, 'hello', '57', 0, 2], should return average of all numbers", () => {
    //arrange
    const numbers = [4, "-", 8, 11, "hello", "57", 0, 2];
    const expected = 5;
    //act
    const output = average(numbers);
    //assert
    expect(output).toEqual(expected);
  });

  it('given the array [4, "-", 8, 11, "hello", "57", 0, 2], should not return [4, 8, 11, 0, 2]', () => {
    //arrange
    const numbers = [4, "-", 8, 11, "hello", "57", 0, 2];
    const isNotAcepted = [4, 8, 11, 0, 2];
    //act
    const output = average(numbers);
    //assert
    expect(output).not.toEqual(isNotAcepted);
  });

  it("given the input('hola'), should  throw an error", () => {
    //arrange
    const input = "hola";
    const output = () => average(input);
    //act and assert
    expect(output).toThrow(Error);
  });

  it("given an empty input(undefined), should throw an error", () => {
    //arrange
    const input = undefined;
    const output = () => average(input);
    //act and assert
    expect(output).toThrow(Error);
  });

  it("given the input null, should throw an error", () => {
    //arrange
    const input = null;
    const output = () => average(input);
    //act and assert
    expect(output).toThrow(Error);
  });

});


// metodo every para seleccionar solo strings? lenght del array, reduce del array divido por el length