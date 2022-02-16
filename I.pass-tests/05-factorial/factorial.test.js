const {factorial} = require("./factorial");

describe("Factorial function", () => {
  it("For the int 5 it will return 120", () => {
    //arrange
    const int = 5;
    const expected = 120;

    //act
    const output = factorial(int);

    //assert
    expect(output).toBe(expected);

  });

  it("For the int 9 it will return 362880", () => {
    //arrange
    const int = 9;
    const expected = 362880;

    //act
    const output = factorial(int);

    //assert
    expect(output).toEqual(expected);

  });

    
  it("For the int 1 it will return 1 ", () => {
    //arrange
    const int = 1;
    const expected = 1;

    //act
    const output = factorial(int);

    //assert
    expect(output).toEqual(expected);
  });

  it("For the int 0 it will return 1", () => {
    //arrange
    const int = 0;
    const expected = 1;

    //act
    const output = factorial(int);

    //assert
    expect(output).toEqual(expected);
  });

  it("For the int 3 it will return 6", () => {
    //arrange
    const int = 3;
    const expected = 6;
    
    //act
    const output = factorial(int);
    
    //assert
    expect(output).toEqual(expected);
  });
});
