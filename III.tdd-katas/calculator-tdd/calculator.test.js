const { calculator } = require("./calculator");

describe("Calculator function", () => {

  it("For an empty it will return 0", () => {
    // Arrange
    const numbers = "";
    const expected = 0;

    // Act
    const result = calculator(numbers);

    // Assert
    expect(result).toEqual(expected);
  });

  it("For the 1 it will return 1", () => {
    // Arrange
    const numbers = "1";
    const expected = 1;

    // Act
    const result = calculator(numbers);

    // Assert
    expect(result).toEqual(expected);
  });
  it("For the [1,2] it will return 3", () => {
    // Arrange
    const numbers = "[1,2]";
    const expected = 3;

    // Act
    const result = calculator(numbers);

    // Assert
    expect(result).toEqual(expected);
  });

  it("For the [1, 2, 3] it will return 6", () => {
    // Arrange
    const numbers = "[1, 2, 3]";
    const expected = 6;

    // Act
    const result = calculator(numbers);

    // Assert
    expect(result).toEqual(expected);
  });

  it("For the [10, 80, 400, 509] it will return 999", () => {
    // Arrange
    const numbers = "[10, 80, 400, 509]";
    const expected = 999;

    // Act
    const result = calculator(numbers);

    // Assert
    expect(result).toEqual(expected);
  });

  it("For the '1\n2,3' it will return 6", () => {
    //Arrange
    const numbers = "1\n2,3";
    const expected = 6;

    //Act
    const result = calculator(numbers);

    //Assert
    expect(result).toEqual(expected);
  })

  it("For the '1, 4, -1' it will throw an error", () => {
    //Arrange
    const numbers = "1, 4, -1";

    //Act
    const result = () => calculator(numbers);

    //Assert
    expect(result).toThrow("negatives not allowed: -1");
  })

  it("For the '-5, 25' it will throw an error", () => {
    //Arrange
    const numbers = "-5, 25";

    //Act
    const result = () => calculator(numbers);

    //Assert
    expect(result).toThrow("negatives not allowed: -5");
  })

  it("For the '12, hola22' it will return 34", () => {
    //Arrange
    const numbers = "12, hola22";
    const expected = 34;

    //Act
    const result = calculator(numbers);

    //Assert
    expect(result).toEqual(expected);
  })
  it("For the '2, 1001' it will return 2", () => {
    //Arrange
    const numbers = "2, 1001";
    const expected = 2;

    //Act
    const result = calculator(numbers);

    //Assert
    expect(result).toEqual(expected);
  })

});