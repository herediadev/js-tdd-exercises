const { secondLargest } = require("./second-largest");

describe("Second largest number in the array", () => {
  //it comprobate valid inputs
  it("Ensuring data is correct", () => {
    const in1 = "a";
    const in2 = {};
    const in3 = [];
    const in4 = true;
    const in5 = false;
    const in6 = null;
    const in7 = undefined;
    const in8 = 1.8;
    const in9 = NaN;
    const in10 = 0;
    const in11 = 1;

    const exp1 = "Invalid Input";
    const exp2 = "Invalid Input";
    const exp3 = "Empty Input";
    const exp4 = "Invalid Input";
    const exp5 = "Invalid Input";
    const exp6 = "Invalid Input";
    const exp7 = "Invalid Input";
    const exp8 = "Invalid Input";
    const exp9 = "Invalid Input";
    const exp10 = "Invalid Input";
    const exp11 = "Invalid Input";

    expect(secondLargest(in1)).toBe(exp1);
    expect(secondLargest(in2)).toBe(exp2);
    expect(secondLargest(in3)).toBe(exp3);
    expect(secondLargest(in4)).toBe(exp4);
    expect(secondLargest(in5)).toBe(exp5);
    expect(secondLargest(in6)).toBe(exp6);
    expect(secondLargest(in7)).toBe(exp7);
    expect(secondLargest(in8)).toBe(exp8);
    expect(secondLargest(in9)).toBe(exp9);
    expect(secondLargest(in10)).toBe(exp10);
    expect(secondLargest(in11)).toBe(exp11);
  });

  it("should return the second largest, for [1,2,3,4] expect 3", () => {
    const numbers = [1, 2, 3, 4];
    const expectedOutput = 3;

    expect(secondLargest(numbers)).toBe(expectedOutput);
  });
});
