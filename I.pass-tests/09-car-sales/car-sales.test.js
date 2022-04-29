const { sales } = require("./car-sales");

describe("The sales function helps us calculate the total profit of a brand, it receives an array of objects that contain characteristics such as price, color and model.", () => {
  // TODO: valid elements

  it("Given an empty array we must return the message 'No sales yet' as feedback on the current situation.", () => {
    // Arrange
    const carsSold = [];

    // Act
    const output = sales(carsSold);

    // Assert
    expect(output).toEqual("No solds yet");
  });

  it("Given an array with the sales, we must return an object with the brand as the key and the sum of the prices as the value.", () => {
    // Arrange
    const carsSold = [
      { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 },
      { make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
      { make: "Toyota", model: "Prius", colour: "Silver", price: 6500 },
      { make: "Honda", model: "Civic", colour: "Yellow", price: 8000 },
      { make: "Ford", model: "Fiesta", colour: "Red", price: 15000 },
      { make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
      { make: "Ford", model: "Fiesta", colour: "Green", price: 2000 },
    ];

    const unchangedCars = [
      { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 },
      { make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
      { make: "Toyota", model: "Prius", colour: "Silver", price: 6500 },
      { make: "Honda", model: "Civic", colour: "Yellow", price: 8000 },
      { make: "Ford", model: "Fiesta", colour: "Red", price: 15000 },
      { make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
      { make: "Ford", model: "Fiesta", colour: "Green", price: 2000 },
    ];

    const totals = {
      Ford: 22999,
      Honda: 8000,
      "Land Rover": 21000,
      Toyota: 6500,
    };

    // Act
    const output = sales(carsSold);

    // Assert
    expect(output).toEqual(totals);
    expect(carsSold).toEqual(unchangedCars);
  });
});
