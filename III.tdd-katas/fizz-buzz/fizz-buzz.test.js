const { fizzbuzz } = require("./fizz-buzz");

describe("Fizzbuzz function", () => {
  it("For the 1 it will return '1' ", () => {
    //Arrange
    const number = 1;
    const expected = "1";


    //Act
    const result = fizzbuzz(number);

    //Assert
    expect(result).toEqual(expected);
  });

  it("For the 2 it will return '1,2' ", () => {
    //Arrange
    const number = 2;
    const expected = "1, 2";

    //Act
    const result = fizzbuzz(number);

    //Assert
    expect(result).toEqual(expected);
  });

  it("For the 3 it will return '1, 2, 3' ", () => {
    //Arrange
    const number = 3;
    const expected = "1, 2, Fizz";

    //Act
    const result = fizzbuzz(number);

    //Assert
    expect(result).toEqual(expected);
  });
  it("For the 5 it will return '1, 2, 3, 4, 5' ", () => {
    //Arrange
    const number = 5;
    const expected = "1, 2, Fizz, 4, Buzz";

    //Act
    const result = fizzbuzz(number);

    //Assert
    expect(result).toEqual(expected);
  });

  it("For the 10 it will return '1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz' ", () => {
    //Arrange
    const number = 10;
    const expected = "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz";

    //Act
    const result = fizzbuzz(number);

    //Assert
    expect(result).toEqual(expected);
  });

  it("For the 20 it will return '1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, Fizz, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz' ", () => {
    //Arrange
    const number = 20;
    const expected = "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, Fizz, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz";

    //Act
    const result = fizzbuzz(number);

    //Assert
    expect(result).toEqual(expected);
  });

  it("For the 50 it will return '1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, Fizz, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, Fizz, Fizz, Buzz, 26, Fizz, 28, 29, FizzBuzz, Fizz, Fizz, Fizz, Fizz, Fizz, Fizz, Fizz, Fizz, Fizz, Buzz, 41, Fizz, Fizz, 44, FizzBuzz, 46, 47, Fizz, 49, Buzz' ", () => {
    //Arrange
    const number = 50;
    const expected = "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, Fizz, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, Fizz, Fizz, Buzz, 26, Fizz, 28, 29, FizzBuzz, Fizz, Fizz, Fizz, Fizz, Fizz, Fizz, Fizz, Fizz, Fizz, Buzz, 41, Fizz, Fizz, 44, FizzBuzz, 46, 47, Fizz, 49, Buzz";

    //Act
    const result = fizzbuzz(number);

    //Assert
    expect(result).toEqual(expected);
  });
});
