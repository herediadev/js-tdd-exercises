const { greetPeople } = require("./greet-people");

describe("Greet people ", () => {
  it("Should return 'Invalid input' if input is not an array or a invalid value", () => {
    const invalidWords = [{}, [], true, false, null, undefined, 1, 2.5, NaN];

    const expectedOutput = "Invalid input";

    const output = greetPeople(invalidWords);

    expect(output).toEqual(expectedOutput);
  });

  it("Should greet how 'Hello + name', for ['Irina', 'Ashleigh', 'Etza'], ['Hello Irina', 'Hello Ashleigh', 'Hello Etza']", () => {
    const mentors = ["Irina", "Ashleigh", "Etza"];
    const expected = ["Hello Irina", "Hello Ashleigh", "Hello Etza"];

    const output = greetPeople(mentors);

    expect(output).toEqual(expected);
  });
});
