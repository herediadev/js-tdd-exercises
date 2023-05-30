import {describe , it , expect} from "vitest";
import {addAllnumbers} from "./add-numbers";

describe('Add all numbers function', () => { 
  it('should be a function', () => {
    // Act and Assert
    expect(typeof addAllnumbers).toBe('function');
  });

  it('Should throw error when addAllnumbers is null', () => {

    // Arrange
    const numbers = null;

    // Act and Assert
    expect(() => addAllnumbers(numbers)).toThrow(/^Invalid format$/);
  });
  
  it('Should sum all numbers -> 9, 23, 10, 3, 8 = 53', () => {

    // Arrange
    const numbers = [9, 23, 10, 3, 8];
    const expected = 53;

    // Act
    const output = addAllnumbers(numbers);
    
    // Assert
    expect(output).toEqual(expected);
  });
  
  it('Should return 0 when array is empty', () => {

    // Arrange
    const numbers = [];
    const expected = 0;

    // Act
    const output = addAllnumbers(numbers);
    
    // Assert
    expect(output).toEqual(expected);
  });
  
  it('Should sum only numbers -> 9, "Hola", 10, "S", 8 = 27', () => {

    // Arrange
    const numbers = [9, 'Hola', 10, 'S', 8];
    const expected = 27;

    // Act
    const output = addAllnumbers(numbers);
    
    // Assert
    expect(output).toEqual(expected);
  });
  
  it('Should sum numbers with decimals and rounded -> 9, 35.7, 10, 12.1, 8 = 75', () => {

    // Arrange
    const numbers = [9, 35.7, 10, 12.1, 8];
    const expected = 75;

    // Act
    const output = addAllnumbers(numbers);
    
    // Assert
    expect(output).toEqual(expected);
  });
  
  it('Should return 0 if there is non numerics values -> null, "Hola", NaN, true, false = 0', () => {

    // Arrange
    const numbers = [null, 'Hola', NaN, true, false];
    const expected = 0;

    // Act
    const output = addAllnumbers(numbers);
    
    // Assert
    expect(output).toEqual(expected);
  });
  
  it('Should return 0 there is onle booleans -> true, false, true = 0', () => {

    // Arrange
    const numbers = [true, false, true];
    const expected = 0;

    // Act
    const output = addAllnumbers(numbers);
    
    // Assert
    expect(output).toEqual(expected);
  });
  
  it('Should sum negative numbers -> -1, -4, -7, 2 = -10', () => {

    // Arrange
    const numbers = [-1, -4, -7, 2];
    const expected = -10;

    // Act
    const output = addAllnumbers(numbers);
    
    // Assert
    expect(output).toEqual(expected);
  });
  
  it('Should return 0 when array is only 0 -> 0, 0, 0, 0 = 0', () => {

    // Arrange
    const numbers = [0, 0, 0, 0];
    const expected = 0;

    // Act
    const output = addAllnumbers(numbers);
    
    // Assert
    expect(output).toEqual(expected);
  });
  
})

