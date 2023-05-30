import {describe , it , expect} from "vitest";
import {formatCities} from "./cities";

describe('formatCities capitals function', () => {
  it('should be a function', () => {
    // Act and Assert
    expect(typeof formatCities).toBe('function');
  });

  it.each([
    [{ statusError: 1 }, null], // The country value is null
    [{ statusError: 1 }, NaN], // The country value is NaN
    [{ statusError: 2 }, []], // The value is an empty array
    [{ statusError: 3}, {city: 'Paris'}], // Not is an array
    [{ statusError: 3 }, true], // The value is boolean
    [{ statusError: 3 }, false], // The value is boolean
    [{ statusError: 4}, [false, ['country', 'France']]], // None of these values is an object
  ])('should throw error with statusError %o when input is %s', (expectedStatusError, value) => {
    try{
      formatCities(value)
    }catch(error){
      expect(error).toBeInstanceOf(Error);
      expect(error.cause).toHaveProperty('statusError', expectedStatusError.statusError);
    }
  });

  it('should return strings with capital and country transformed', () => {
    // Arrange
    const capitals = [
      { city: "Paris", country: "France" },
      { city: "Madrid", country: "Spain" },
      { city: "Rome", country: "Italy" }
    ];

    const expected = [
      "Paris is the capital of France",
      "Madrid is the capital of Spain",
      "Rome is the capital of Italy"
    ];
    
    // Act
    const result = formatCities(capitals);
    
    // Assert
    expect(result).toEqual(expected);
  });

  it('should return strings with capital and country transformed with values with spaces, removing that spaces', () => {
    // Arrange
    const capitals = [
      { city: "Paris", country: "France" },
      { city: " Madrid", country: "Spain" },
      { city: "Rome ", country: "Italy" }
    ];

    const expected = [
      "Paris is the capital of France",
      "Madrid is the capital of Spain",
      "Rome is the capital of Italy"
    ];
    
    // Act
    const result = formatCities(capitals);
    
    // Assert
    expect(result).toEqual(expected);
  });

  it("should return strings with capital and country that only not nulled att's object", () => {
    // Arrange
    const capitals = [
      { city: "Paris", country: "France" },
      { city: "", country: "Spain" },
      { city: "Rome ", country: "" }
    ];

    const expected = [
      "Paris is the capital of France",
    ];
    
    // Act
    const result = formatCities(capitals);
    
    // Assert
    expect(result).toEqual(expected);
  });

  it('should return strings with valid objects', () => {
    // Arrange
    const capitals = [
      { city: "Paris", country: "France" },
      { city: "Madrid" },
      { country: "Italy" },
      ['France', 'Paris'],
      false,
      NaN
    ];

    const expected = [
      "Paris is the capital of France",
    ];
    
    // Act
    const result = formatCities(capitals);
    
    // Assert
    expect(result).toEqual(expected);
  });

})
