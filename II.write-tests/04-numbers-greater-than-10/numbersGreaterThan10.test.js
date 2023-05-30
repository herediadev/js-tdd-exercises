const {largerThanTen} = require("./numbersGreaterThan10");

describe("Get numbers greater than 10", () => {
    it("For the [4, 10, 32, 9, 21] it will return [32, 21]", () => {
      // Arrange
      const input = [4, 10, 32, 9, 21];
      const expected = [32, 21];
      
      // Act
      const result = largerThanTen(input);
  
      // Assert
      expect(result).toEqual(expected);
    });
  });

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
