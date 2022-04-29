const { secondLargest } = require("./second-largest");

describe("Given an array of numbers, it should return the second highest value.", () => {
  // it("El entry debe ser un array y en el caso de ser un valor invalido arrojar un error con el mensaje 'Invalid input.'.")
  // it("En caso de ser un array vacío o menor a 2 deberá de retornar un error con el mensaje 'Empty Input.'.")
  it("should return the second largest, for [1,2,3,4] expect 3", () => {
    const numbers = [1, 2, 3, 4];
    const expectedOutput = 3;

    expect(secondLargest(numbers)).toBe(expectedOutput);
  });
});
