import {describe , it , expect} from "vitest";
import {wordLengths} from "./get-word-lengths";

describe("Get word lengths function", () => {
  
  it('should be a function', () => {

    // Act and Assert
    expect(typeof wordLengths).toBe('function');
  });

  it('Should throw error when wordLengths is null', () => {

    // Arrange
    const words = null;

    // Act and Assert
    expect(() => wordLengths(words)).toThrow(/^Invalid format$/);
  });

  it('Should throw error when wordLengths is boolean', () => {

    // Arrange
    const words = false;

    // Act and Assert
    expect(() => wordLengths(words)).toThrow(/^Invalid format$/);
  });
  
  it('Should count only string "sun", 1, "5", "pizza", null = 3, 0, 1, 5, when count a different type, the value is 0', () => {

    // Arrange
    const words = ["sun", 1, "5", "pizza", null];
    const expected = [3, 0, 1, 5, 0];

    // Act
    const output = wordLengths(words);
    
    // Assert
    expect(output).toEqual(expected);
  });
  
  it('Will return lenght of all strings -> sun, potato, roundabout, pizza = 3, 6, 10, 5', () => {

    // Arrange
    const words = ["sun", "potato", "roundabout", "pizza"];
    const expected = [3, 6, 10, 5];

    // Act
    const output = wordLengths(words);
    
    // Assert
    expect(output).toEqual(expected);
  });
  
  it('Should return empty array when pass empty array', () => {

    // Arrange
    const words = [];
    const expected = [];

    // Act
    const output = wordLengths(words);
    
    // Assert
    expect(output).toEqual(expected);
  });
  
  it('Should return only ceros when pass only non string values', () => {

    // Arrange
    const words = [null, true, false, NaN];
    const expected = [0, 0, 0, 0];

    // Act
    const output = wordLengths(words);
    
    // Assert
    expect(output).toEqual(expected);
  });
  
  it('Should count correctly with special characters and spaces -> "Mérida", "Fifa 23", "Planta #2" = 6, 7, 9', () => {

    // Arrange
    const words = ['Mérida', 'Fiña 23', 'Planta #2'];
    const expected = [6, 7, 9];

    // Act
    const output = wordLengths(words);
    
    // Assert
    expect(output).toEqual(expected);
  });

})
