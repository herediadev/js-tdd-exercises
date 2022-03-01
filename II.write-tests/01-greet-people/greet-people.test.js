const { greetPeople } = require("./greet-people");

describe("print list of names prefixed with Hello", () => {
  it("For the ['Irina', 'Ashleigh', 'Etza'] it will return ['Hello Irina', 'Hello Ashleigh' , 'Hello Etza']", () => {
    // Arrange
    const people = ['Irina', 'Ashleigh', 'Etza'];
    const expected = ['Hello Irina', 'Hello Ashleigh', 'Hello Etza'];

    // Act
    const result = greetPeople(people);

    // Assert
    expect(result).toEqual(expected);
  });

});
