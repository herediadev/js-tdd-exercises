import {describe , it , expect} from "vitest";
import {average} from "./get-average";

describe('Get average function', () => {
  it('should be a function', () => {
    // Act and Assert
    expect(typeof average).toBe('function');
  });

  it.each([
    [{ statusError: 1 }, null], // The value is null
    [{ statusError: 2 }, NaN], // The value is NaN
    [{ statusError: 3 }, []], // The value is an empty array
    [{ statusError: 4 }, true], // The value is boolean
    [{ statusError: 4 }, false], // The value is boolean
    [{ statusError: 5 }, ['window', 'template', true, {value: 1}]], // None of these values is integer
  ])('should throw error with statusError %o when input is %s', (expectedStatusError, input) => {
    try{
      average(input)
    }catch(error){
      expect(error).toBeInstanceOf(Error);
      expect(error.cause).toHaveProperty('statusError', expectedStatusError.statusError);
    }
  });

  it('should return 5 on array -> 4, "-", 8, 11, "hello", "57", 0, 2', () => {
    // Arrange
    const numbers = [4, "-", 8, 11, "hello", "57", 0, 2];
    const expected = 5;

    // Act
    const output = average(numbers);
    
    // Assert
    expect(output).toEqual(expected);
  });

  it('should return -1 on array -> -4, "-", 8, -11, "hello", "57", 0, 2', () => {
    // Arrange
    const numbers = [-4, "-", 8, -11, "hello", "57", 0, 2];
    const expected = -1;

    // Act
    const output = average(numbers);
    
    // Assert
    expect(output).toEqual(expected);
  });

  it('should return 0 on array -> 0 and array is various 0', () => {
    // Arrange
    const numbers1 = [0];
    const expected1 = 0;
    const numbers2 = [0, 0, 0, 0];
    const expected2 = 0;

    // Act
    const output1 = average(numbers1);
    const output2 = average(numbers2);
    
    // Assert
    expect(output1).toEqual(expected1);
    expect(output2).toEqual(expected2);
  });
  
});

