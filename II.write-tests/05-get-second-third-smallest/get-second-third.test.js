const {getSecondThird} = require("./get-second-third");

describe("Get second third function", () => {
    it("For the [90, 5, 11, 8, 6]; it will return [6, 8];", () => {
      // Arrange
      const input = [90, 5, 11, 8, 6];
      const expected = [6, 8];
      
      // Act
      const result = getSecondThird(input);
  
      // Assert
      expect(result).toEqual(expected);
    });
  });


// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
