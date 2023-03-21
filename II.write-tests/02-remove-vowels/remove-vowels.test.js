import { describe , it , expect } from "vitest";
import { removeVowels } from "./remove-vowels";

describe('Remove vowels function', () => {
  it('should be a function', () => {
    // Act and Assert
    expect(typeof removeVowels).toBe('function');
  });

  it.each([
    [{ statusError: 1 }, null], // The country value is null
    [{ statusError: 1 }, NaN], // The country value is NaN
    [{ statusError: 2 }, ['samuel']], // The value is an array
    [{ statusError: 2 }, true], // The value is boolean
    [{ statusError: 2 }, false], // The value is boolean
    [{ statusError: 2 }, {name: 'samuel'}], // The value is an object
  ])('should throw error with statusError %o when input is %s', (expectedStatusError, value) => {
    try{
      removeVowels(value)
    }catch(error){
      expect(error).toBeInstanceOf(Error);
      expect(error.cause).toHaveProperty('statusError', expectedStatusError.statusError);
    }
  });

  it("should remove vowels from word", function() {

    // Arrange
    const word = 'samuel';

    // Act
    const result = removeVowels(word);
    const expected = 'sml'
    
    // Assert
    expect(result).toEqual(expected);
  });

  it("should remove only vowels from word whith signs, spaces and numbers", function() {

    // Arrange
    const word = 'samuel12!! is here?';

    // Act
    const result = removeVowels(word);
    const expected = 'sml12!! s hr?'
    
    // Assert
    expect(result).toEqual(expected);
  });

  it("should return empty string when is a number", function() {

    // Arrange
    const word = 123;

    // Act
    const result = removeVowels(word);
    const expected = ''
    
    // Assert
    expect(result).toEqual(expected);
  });

})


