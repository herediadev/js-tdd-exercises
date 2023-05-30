import {describe , it , expect} from "vitest";
import {addOne} from "./add-one.js";

describe("Given the addOne function", () => {
  
  it('should be a function', () => {
    expect(typeof addOne).toBe('function');
  });

  it('Will add one to [31, 57, 12, -5, 0] and obtain [32, 58, 13, -4, 1], return both Arrange', () => {

    // Arrange
    const myArray = [31, 57, 12, -5, 0];
    const unchanged = [31, 57, 12, -5, 0];
    const expected = [32, 58, 13, -4, 1];

    // Act
    const output = addOne(myArray);
    
    // Assert
    expect(output).toEqual(expected);
    expect(myArray).toEqual(unchanged);
  });

  it('Should return an empty array when myArray is empty', () => {

    // Arrange
    const myArray = [];
    const unchanged = [];
    const expected = [];

    // Act
    const output = addOne(myArray);
    
    // Assert
    expect(output).toEqual(expected);
    expect(myArray).toEqual(unchanged);
  });

  it('Will add one to only one zero array [0] to [1]', () => {

    // Arrange
    const myArray = [0];
    const unchanged = [0];
    const expected = [1];

    // Act
    const output = addOne(myArray);
    
    // Assert
    expect(output).toEqual(expected);
    expect(myArray).toEqual(unchanged);
  });

  it('Should return only numerics values -> [5, hello, 2, {name: John}, 9, undefined, 11] to [6, 3, 10, 12]', () => {

    // Arrange
    const myArray = [5, 'hello', 2, {name: 'John'}, 9, undefined, 11];
    const unchanged = [5, 'hello', 2, {name: 'John'}, 9, undefined, 11];
    const expected = [6, 3, 10, 12];

    // Act
    const output = addOne(myArray);
    
    // Assert
    expect(output).toEqual(expected);
    expect(myArray).toEqual(unchanged);
  });

  it('Should return [] when contains only not numerics elements -> [hello, bye] to []', () => {

    // Arrange
    const myArray = ['hello', 'bye'];
    const unchanged = ['hello', 'bye'];
    const expected = [];

    // Act
    const output = addOne(myArray);
    
    // Assert
    expect(output).toEqual(expected);
    expect(myArray).toEqual(unchanged);
  });

  it('Should return rounded numbers when its decimals -> [1.15, 2.54, 9.78, 10.47] to [2, 4, 11, 11]', () => {

    // Arrange
    const myArray = [1.15, 2.54, 9.78, 10.47];
    const unchanged = [1.15, 2.54, 9.78, 10.47];
    const expected = [2, 4, 11, 11];

    // Act
    const output = addOne(myArray);
    
    // Assert
    expect(output).toEqual(expected);
    expect(myArray).toEqual(unchanged);
  });

  it('Should throw error when received null', () => {

    // Arrange
    const myArray = null;

    // Act and Assert
    expect(() => addOne(myArray)).toThrow(/^Invalid format$/);
    
  });

  it('Should throw error when received boolean', () => {

    // Arrange
    const myArray = false;

    // Act and Assert
    expect(() => addOne(myArray)).toThrow(/^Invalid format$/);
    
  });
})