const { greetPeople } = require("./greet-people");

describe("print list of names prefixed with Hello", () => {
  it("For the ['Irina', 'Ashleigh', 'Etza'] it will return 'Hello IrinaAshleighEtza'", () => {
    // Arrange
    const people = ['Irina', 'Ashleigh', 'Etza'];
    const expected = "Hello IrinaAshleighEtza";

    // Act
    const result = greetPeople(people);

    // Assert
    expect(result).toEqual(expected);
  });

});
