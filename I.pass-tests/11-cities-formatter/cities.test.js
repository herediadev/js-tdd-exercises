const { formatCities } = require("./cities");

describe("Cities function", () => {
  it('should return "Paris is the capital of France"..., after transforming the object{ city: "Paris", country: "France" }...', () => {
    //arrange
    const capitals = [
      { city: "Paris", country: "France" },
      { city: "Madrid", country: "Spain" },
      { city: "Rome", country: "Italy" }
    ];

    const transform = ({ city, country }) => {
      return `${city} is the capital of ${country}`;
    }

    const expected = [
      "Paris is the capital of France",
      "Madrid is the capital of Spain",
      "Rome is the capital of Italy"
    ];

    //act
    const result = formatCities(capitals, transform);
    
    //assert
    expect(result).toEqual(expected);
  });

});
