const { factorial } = require("./factorial");

describe("Factorial function", () => {
  it("Given the input, example: the number 5, should return the number 120", () => {
    const in1 = 5;
    const exp1 = 120;

    const in2 = 9;
    const exp2 = 362880;

    const in3 = 1;
    const exp3 = 1;

    const in4 = 0;
    const exp4 = 1;

    const in5 = 3;
    const exp5 = 6;

    const out1 = factorial(in1);
    const out2 = factorial(in2);
    const out3 = factorial(in3);
    const out4 = factorial(in4);
    const out5 = factorial(in5);

    expect(out1).toEqual(exp1);
    expect(out2).toEqual(exp2);
    expect(out3).toEqual(exp3);
    expect(out4).toEqual(exp4);
    expect(out5).toEqual(exp5);
  });

  it("Given the input -2, should throw an error", () => {
    //arrange
    const int = -2;
    const output = () => factorial(int);
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
});
