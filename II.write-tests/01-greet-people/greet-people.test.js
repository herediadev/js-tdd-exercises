const { greetPeople } = require("./greet-people");

describe("Given an array of string names, should be return an array with a 'Hello NAME' .", () => {
  
  it("Should return 'Invalid input' if input is not an array or a invalid value", () => {
    
    // Arrange
    const invalidWords = [{}, [], true, false, null, undefined, 1, 2.5, NaN];
    const expectedOutput = "Invalid input";

    // Act
    const output = greetPeople(invalidWords);

    // Assert
    expect(output).toEqual(expectedOutput);
  });

  // empty entry 

  it("Should greet how 'Hello + name', for ['Irina', 'Ashleigh', 'Etza'], ['Hello Irina', 'Hello Ashleigh', 'Hello Etza']", () => {
    // Arrange
    const mentors = ["Irina", "Ashleigh", "Etza"];
    const expected = ["Hello Irina", "Hello Ashleigh", "Hello Etza"];

    // Act
    const output = greetPeople(mentors);

    // Assert
    expect(output).toEqual(expected);
  });
});
