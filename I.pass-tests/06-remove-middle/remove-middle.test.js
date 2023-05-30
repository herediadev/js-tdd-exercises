import {describe , it , expect} from "vitest";
import {removeMiddle} from "./remove-middle";

describe('Remove middle word function', () => {

  it('should be a function', () => {
    // Act and Assert
    expect(typeof removeMiddle).toBe('function');
  });

  it.each([
    [null],
    [true],
    [NaN],
    [5],
    [''],
    ['proof']
  ])('Should throw error when word is %p', (word) => {

    // Act and Assert
    expect(() => removeMiddle(word)).toThrow(/^Invalid param$/);
  });

  it('Should return the middle string in an odd array -> "mouse", "giraffe", "queen", "window", "bottle" => "mouse", "giraffe", "window", "bottle" && "queen"', () => {

    // Arrange
    const words = ["mouse", "giraffe", "queen", "window", "bottle"];
    const expectedWords = ["mouse", "giraffe", "window", "bottle"];
    const expectedOutput = ["queen"];

    // Act
    const output = removeMiddle(words);
    
    // Assert
    expect(output).toEqual(expectedOutput);
    expect(words).toEqual(expectedWords);
  });

  it('Should return the numeric middle value in an even array -> "mouse", "giraffe", "window", "bottle" => "mouse", "window", "bottle" && "giraffe"', () => {

    // Arrange
    const words = ["mouse", "giraffe", "window", "bottle"];
    const expectedWords = ["mouse", "window", "bottle"];
    const expectedOutput = ["giraffe"];

    // Act
    const output = removeMiddle(words);
    
    // Assert
    expect(output).toEqual(expectedOutput);
    expect(words).toEqual(expectedWords);
  });
  
});

