const { removeMiddle } = require("./remove-middle");

describe("Given an array of words, this function returns the string in the middle.", () => {
  // todo: Comprobar valores undefined, null, etc
  // todo: Comprobar si el array es mayor o igual a 3
  it("Given an pair array or less than 3, if is should it return the message 'Can't tell the middle word of this array'.", () => {
    const wordsPair = ["a", "b", "c", "d"];

    expect(removeMiddle(wordsPair)).toBe(
      "Can't tell the middle word of this array"
    );
  });

  it("Given an array containing invalid words and values, you must work with the possible words, and if they don't exist, you must return the message 'Can't tell from the middle word of this array'.", () => {
    // Arrange
    const words = [
      {},
      [],
      true,
      false,
      null,
      undefined,
      1,
      1.5,
      "a",
      "b",
      "c",
      NaN,
    ];

    // Act
    const expected = "b";
    const output = removeMiddle(words);

    // Assert
    expect(output).toEqual(expected);
    expect(removeMiddle([])).toEqual(
      "Can't tell the middle word of this array"
    );
  });

  // Se me hace que el uso de esta funcionalidad depende bastante del contexto.
  it("should remove the middle word regardless of capital letters or spaces and dont modify original entry.", () => {
    const words = ["mouse", "giraffe", "Qu eE n", "window", "bottle"];
    const unchangedWords = ["mouse", "giraffe", "Qu eE n", "window", "bottle"];
    const expectedOutput = "queen";

    const output = removeMiddle(words);

    expect(output).toEqual(expectedOutput);
    expect(words).toEqual(unchangedWords);
  });
});
