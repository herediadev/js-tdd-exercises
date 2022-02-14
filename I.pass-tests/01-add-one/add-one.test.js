const {addOne} = require("./add-one.js");

describe("Given the addOne function",()=>{
  it("it will add one to [31, 57, 12, 5] returning [32, 58, 13, 6] and keeping the original array", ()=> {
    //arrange
    const myArray = [31, 57, 12, 5];
    const unchanged = [31, 57, 12, 5];
    const expected = [32, 58, 13, 6];

    //act
    const output = addOne(myArray);

    //assert
    expect(output).toEqual(expected);
    expect(myArray).toEqual(unchanged);
  });

});