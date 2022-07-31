const secondLargest = require("./second-largest");

describe("", () =>{


it("Second largest", () => {
  const numbers = [2, 0, 23, 0, 57, 1, 230];

  const output = secondLargest(numbers);

  expect(output).toEqual(57);
});
})