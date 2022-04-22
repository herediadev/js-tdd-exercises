const { factorial } = require("./factorial");

describe("Encounter the factorial", function () {
  it("Ensuring data is correct", function () {
    const in1 = "a";
    const in2 = {};
    const in3 = [];
    const in4 = true;
    const in5 = false;
    const in6 = null;
    const in7 = undefined;
    const in8 = 1.8;

    const exp1 = "Invalid Input";
    const exp2 = "Invalid Input";
    const exp3 = "Invalid Input";
    const exp4 = "Invalid Input";
    const exp5 = "Invalid Input";
    const exp6 = "Invalid Input";
    const exp7 = "Invalid Input";
    const exp8 = "ONLY WHOLE NUMBERS";

    const out1 = factorial(in1);
    const out2 = factorial(in2);
    const out3 = factorial(in3);
    const out4 = factorial(in4);
    const out5 = factorial(in5);
    const out6 = factorial(in6);
    const out7 = factorial(in7);
    const out8 = factorial(in8);

    expect(out1).toEqual(exp1);
    expect(out2).toEqual(exp2);
    expect(out3).toEqual(exp3);
    expect(out4).toEqual(exp4);
    expect(out5).toEqual(exp5);
    expect(out6).toEqual(exp6);
    expect(out7).toEqual(exp7);
    expect(out8).toEqual(exp8);
  });

  it("Test various cases of factorial, output of 5 should be 120", () => {
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
});
