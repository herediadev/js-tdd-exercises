const {calculator} = require("./calculator");

    describe("Calculator function", () => {
        it("For the [2,2] it will return 4", () => {
          // Arrange
          const int = [2,2];
          const expected = 4;
          
          // Act
          const result = calculator(int);
      
          // Assert
          expect(result).toEqual(expected);
        });

        it("For an empty array it will return 0", () => {
          // Arrange
          const int = [];
          const expected = 0;
          
          // Act
          const result = calculator(int);
      
          // Assert
          expect(result).toEqual(expected);
        });
});