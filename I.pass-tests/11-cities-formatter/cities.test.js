const { formatCities } = require("./cities");

describe("formatCities", () => {
  it("Should cities and capital", () => {
    const capitals = [
      { city: "Paris", country: "France" },
      { city: "Madrid", country: "Spain" },
      { city: "Rome", country: "Italy" },
    ];

    function transform({ city, country }) {
      return `${city} is the capital of ${country}`;
    }

    const expected = [
      "Paris is the capital of France",
      "Madrid is the capital of Spain",
      "Rome is the capital of Italy",
    ];

    const result = formatCities(capitals, transform);

    expect(result).toEqual(expected);
  });

  it("Empty array", () => {
    const capitals = [];

    function transform({ city, country }) {
      return `${city} is the capital of ${country}`;
    }

    const expected = [];

    const result = formatCities(capitals, transform);

    expect(result).toEqual(expected);
  });
});
