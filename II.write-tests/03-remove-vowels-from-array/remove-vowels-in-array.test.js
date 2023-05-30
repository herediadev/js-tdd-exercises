import { describe , it , expect } from "vitest";
import { removeVowelsForWords } from "./remove-vowels-in-array";

describe('Remove vowels in arrayfunction', () => {
  it('should be a function', () => {
    // Act and Assert
    expect(typeof removeVowelsForWords).toBe('function');
  });

  it.each([
    [{ statusError: 1 }, null], // The country value is null
    [{ statusError: 1 }, NaN], // The country value is NaN
    [{ statusError: 2 }, 'samuel'], // The value is a strign
    [{ statusError: 2 }, true], // The value is boolean
    [{ statusError: 2 }, false], // The value is boolean
    [{ statusError: 2 }, {name: 'samuel'}], // The value is an object
    [{ statusError: 2 }, 1234], // The value is integer
  ])('should throw error with statusError %o when input is %s', (expectedStatusError, value) => {
    try{
      removeVowelsForWords(value)
    }catch(error){
      expect(error).toBeInstanceOf(Error);
      expect(error.cause).toHaveProperty('statusError', expectedStatusError.statusError);
    }
  });
  
  it("should remove vowels from words array", function() {

    // Arrange
    const words = ["Irina", "Etza", "Daniel"];

    // Act
    const result = removeVowelsForWords(words);
    const expected = ["rn", "tz", "Dnl"]
    
    // Assert
    expect(result).toEqual(expected);
  });
  
  it("should remove vowels from differents kind of values in array", function() {

    // Arrange
    const words = ["Irina", "Etza", "Daniel", 2, true, false, null, NaN, {name: "samuel"}];

    // Act
    const result = removeVowelsForWords(words);
    const expected = ["rn", "tz", "Dnl"]
    
    // Assert
    expect(result).toEqual(expected);
  });
  
  it("should return empty array when none of values are string", function() {

    // Arrange
    const words = [2, true, false, null, NaN, {name: "samuel"}];

    // Act
    const result = removeVowelsForWords(words);
    const expected = []
    
    // Assert
    expect(result).toEqual(expected);
  });
  
})

