const { formatCities } = require("./cities");

describe("What the format Cities function does is query an array of objects for their city and country values ​​to return a message with the structure 'X is the capital of X' ", () => {
  // it("Array with one element"
  // it("Comprobate valid entry")
  // it("Comprobate invalid elements in the array")

  it("Given an empty array.", () => {
    expect(formatCities([])).toEqual([]);
  });

  it("Check that given an array of valid objects, it should return a string with the corresponding transformation of the same length. REMEMBER THE ESTRUCTURE:('X is the capital of X').", () => {
    // Arrange
    const capitals = [
      { city: "Paris", country: "France" },
      { city: "Madrid", country: "Spain" },
      { city: "Rome", country: "Italy" },
    ];

    const transform = ({ city, country }) => {
      return `${city} is the capital of ${country}`;
    };

    const expected = [
      "Paris is the capital of France",
      "Madrid is the capital of Spain",
      "Rome is the capital of Italy",
    ];

    // Act
    const result = formatCities(capitals, transform);

    // Assert
    expect(result).toEqual(expected);
  });
});
