const paintShop = require("./paint-cars");

describe("La funcion paint-cars cambiará el valor del color del primer elemento de un arreglo", () => {
  // it("Debe ser mayor a 0")
  // it("Las entradas deben de ser validas")
  // it("Debe devolver un arreglo")

  // Arrange
  it("Given an array of valid objects, check functionality without mutating the original object.", () => {
    const cars = [
      { make: "Ford", model: "Fiesta", colour: "Red" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Honda", model: "Civic", colour: "Yellow" },
    ];

    const unpaintedCars = [
      { make: "Ford", model: "Fiesta", colour: "Red" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Honda", model: "Civic", colour: "Yellow" },
    ];

    const repaintedCars = [
      { make: "Ford", model: "Fiesta", colour: "Pink" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Honda", model: "Civic", colour: "Yellow" },
    ];

    // Act
    const output = paintShop(cars, "Pink");

    // Assert
    expect(output).toEqual(repaintedCars);
    expect(cars).toEqual(unpaintedCars);
  });
});
