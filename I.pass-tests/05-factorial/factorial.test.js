const { factorial } = require("./factorial");

describe("The factorial function receives an integer and computes its factorial.", () => {
  it("Given invalid entries it should throw an error with the message 'I need a number to works :('.", () => {
    // Arrange
    const in1 = "a";
    const in2 = {};
    const in3 = [];
    const in4 = true;
    const in5 = false;
    const in6 = null;
    const in7 = undefined;
    const in8 = 1.8;

    // Act
    const output = () => {
      factorial(in1);
      factorial(in2);
      factorial(in3);
      factorial(in4);
      factorial(in5);
      factorial(in6);
      factorial(in7);
      factorial(in8);
    };

    // Assert
    expect(output).toThrowError("I need a number to works :(");
  });

  it("Given decimal numbers, 0 or negative numbers should throw an error with the message 'ONLY WHOLE NUMBERS'", () => {
    const in1 = 1.1;
    const in2 = 1.8;
    const in3 = -1;
    const in4 = 0;
    const in5 = -0;

    const output = () => {
      factorial(in1);
      factorial(in2);
      factorial(in3);
      factorial(in4);
      factorial(in5);
    };

    expect(output).toThrowError("ONLY WHOLE NUMBERS");
  });

  it("Given different cases, return the correct result, for example: 5 = 120, 9 = 32880, 1 = 1, among others.", () => {
    // Arrange
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

    // Act
    const out1 = factorial(in1);
    const out2 = factorial(in2);
    const out3 = factorial(in3);
    const out4 = factorial(in4);
    const out5 = factorial(in5);

    // Assert
    expect(out1).toEqual(exp1);
    expect(out2).toEqual(exp2);
    expect(out3).toEqual(exp3);
    expect(out4).toEqual(exp4);
    expect(out5).toEqual(exp5);
  });
});
