const {secondLargest} = require("./second-largest");

describe("Second largest", () => {
  it("For the array [mouse, giraffe, queen, window, bottle] it will return [queen]", () => {
    //arrange
    const numbers = [2, 0, 23, 0, 57, 1, 230];

    //act
    const output = secondLargest(numbers);

    //assert
    expect(output).toEqual(57);
  });
});
