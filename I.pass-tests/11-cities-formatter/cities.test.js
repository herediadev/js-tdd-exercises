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

  it("given the input null, should throw an error", () => {
    //arrange
    const input = null;
    const output = () => formatCities(input);
    //act and assert
    expect(output).toThrow(Error);
  });

  it("given the object, should throw an error", () => {
    //arrange
    const input = {};
    const output = () => formatCities(input);
    //act and assert
    expect(output).toThrow(Error);
  });

  it('given the object { city: "Paris", country: "France" }, should throw an error', () => {
    //arrange
    const input =  { city: "Paris", country: "France" };
    const output = () => formatCities(input);
    //act and assert
    expect(output).toThrow(Error);
  });


});
