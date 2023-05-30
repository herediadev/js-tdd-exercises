import {describe , it , expect} from "vitest";
import {secondLargest} from "./second-largest";

describe('Remove middle word function', () => {
  it('should be a function', () => {
    // Act and Assert
    expect(typeof secondLargest).toBe('function');
  });

  it.each([
    [{ statusError: 1 }, null],
    [{ statusError: 2 }, NaN],
    [{ statusError: 3 }, [2]],
    [{ statusError: 3 }, []],
    [{ statusError: 4 }, ['window', 'template', 'document']],
  ])('should throw error with statusError %o when input is %s', (expectedStatusError, input) => {
    try{
      secondLargest(input)
    }catch(error){
      expect(error).toBeInstanceOf(Error);
      expect(error.cause).toHaveProperty('statusError', expectedStatusError.statusError);
    }
  });

  it('should return 57 on array -> 2, 0, 23, 0, 57, 1, 230]', () => {
    // Arrange
    const numbers = [2, 0, 23, 0, 57, 1, 230];

    // Act
    const output = secondLargest(numbers);
    
    // Assert
    expect(output).toEqual(57);
  });

  it('should return 23 on array with strings and boolean -> 2, 0, 23, 0, Window, true, 230', () => {
    // Arrange
    const numbers = [2, 0, 23, 0, 'Window', true, 230];

    // Act
    const output = secondLargest(numbers);
    
    // Assert
    expect(output).toEqual(23);
  });

  it('should return 0 on array with only zeros -> 0, 0, 0, 0, 0, 0, 0', () => {
    // Arrange
    const numbers = [0, 0, 0, 0, 0, 0, 0];

    // Act
    const output = secondLargest(numbers);
    
    // Assert
    expect(output).toEqual(0);
  });

  it('should return -2 on array with only negative numbers -> -2, -10, -23, -20, -57, -1, -230', () => {
    // Arrange
    const numbers = [-2, -10, -23, -20, -57, -1, -230];

    // Act
    const output = secondLargest(numbers);
    
    // Assert
    expect(output).toEqual(-2);
  });

  it('should return 2 on array with positive and negative numbers -> 2, 10, -23, -20, 10, -1, -230', () => {
    // Arrange
    const numbers = [2, 10, -23, -20, 10, -1, -230];

    // Act
    const output = secondLargest(numbers);
    
    // Assert
    expect(output).toEqual(2);
  });
  
})
