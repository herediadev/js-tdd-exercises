const { getAverage } = require("./get-average");

describe("This function returns the average of the sum of an array of numbers.", () => {
  // it("Comprobar si es un array")
  // it("Debe devolver un numero")

  // // ????????????????????????????????????
  // it("El array no debe pesar más de 100kb")

  it("Given an array of valid and invalid entries, it should work with the possible valid ones, and if there are none, throw the error 'Invalid or empty entry.' ", () => {
    // Arrange

    // Para comprobar entradas validas y comprobar la no mutacion.
    const numbers = [4, 6, 8, 10, "a", "b", "c", {}, []];
    const unchangedNumbers = [4, 6, 8, 10, "a", "b", "c", {}, []];
    const expected = 7;

    // Caso de array vacio
    const emptyArray = [];

    // Act
    const output = getAverage(numbers);
    const output2 = getAverage(emptyArray);

    // Assert
    expect(output).toEqual(expected);
    expect(numbers).toEqual(unchangedNumbers);
    expect(output2).toEqual("Invalid or empty entry.");
  });

  it("Given the array [4,6,8,10] it should return 7.", () => {
    const numbers = [4, 6, 8, 10];
    const unchangedNumbers = [4, 6, 8, 10];
    const expected = 7;

    const output = getAverage(numbers);

    expect(output).toEqual(expected);
    expect(numbers).toEqual(unchangedNumbers);
  });
});
