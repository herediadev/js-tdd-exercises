const { paintShop } = require("./paint-cars");

describe("Paint shop function", () => {
  it('Given the object{ make: "Ford", model: "Fiesta", colour: "Red" }, should return a new value for colours{ make: "Ford", model: "Fiesta", colour: "Pink" } ', () => {
    //arrange
    const cars = [
      { make: "Ford", model: "Fiesta", colour: "Red" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Honda", model: "Civic", colour: "Yellow" }
    ];
    const repaintedCars = [
      { make: "Ford", model: "Fiesta", colour: "Pink" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Honda", model: "Civic", colour: "Yellow" }
    ];
    //act
    const output = paintShop(cars, "Pink");
    //assert
    expect(output).toEqual(repaintedCars);

  });

  it('Given the object { make: "Ford", model: "Fiesta", colour: "Red" },{ make: "Land Rover", model: "Defender", colour: "Muddy" },{ make: "Toyota", model: "Prius", colour: "Silver" },{ make: "Honda", model: "Civic", colour: "Yellow" }, should return should return the same', () => {
    //arrange
    const cars = [
      { make: "Ford", model: "Fiesta", colour: "Red" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Honda", model: "Civic", colour: "Yellow" }
    ];

    const unpaintedCars = [
      { make: "Ford", model: "Fiesta", colour: "Red" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Honda", model: "Civic", colour: "Yellow" }
    ];
    //act and assert
    expect(cars).toEqual(unpaintedCars);
  });

  it('Given the array [{ make: "Ford", model: "Fiesta", colour: "Red" },{ make: "Land Rover", model: "Defender", colour: "Muddy" },{ make: "Toyota", model: "Prius", colour: "Silver" },{ make: "Honda", model: "Civic", colour: "Yellow" }], should return a text "Debe seleccionar el color"', () => {
    //arrange
    const cars = [
      { make: "Ford", model: "Fiesta", colour: "Red" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Honda", model: "Civic", colour: "Yellow" }
    ];
    const expected = "Debe seleccionar el color";
    //act
    const output = paintShop(cars);
    //assert
    expect(output).toEqual(expected);
  });


  it("given the input null, should throw an error", () => {
    //arrange
    const input = null;
    const output = () => paintShop(input);
    //act and assert
    expect(output).toThrow(Error);
  });

  it("given the object, should throw an error", () => {
    //arrange
    const input = {};
    const output = () => paintShop(input);
    //act and assert
    expect(output).toThrow(Error);
  });

  it("given the object { make: 'Ford, model: 'Fiesta', colour: 'Red' }, should throw an error", () => {
    //arrange
    const input = { make: "Ford", model: "Fiesta", colour: "Red" };
    const output = () => paintShop(input);
    //act and assert
    expect(output).toThrow(Error);
  });

});
