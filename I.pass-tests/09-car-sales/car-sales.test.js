const { sales } = require("./car-sales");

describe("sales", () => {
  it("should return 0 if no cars are sold", () => {
    const carsSold = [];

    const output = sales(carsSold);

    expect(output).toEqual("No solds yet");
  });

  it("should return an object with the total sales for each make", () => {
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

    const output = sales(carsSold);

    expect(output).toEqual(totals);
    expect(carsSold).toEqual(unchangedCars);
  });
  // TODO: valid elements
});
