import { describe , it , expect } from "vitest";
import { getEven } from "./get-even-numbers";

describe('Return second and third value function', () => {
    it('should be a function', () => {
      // Act and Assert
      expect(typeof getEven).toBe('function');
    });
  
    it.each([
      [{ statusError: 1 }, null], // The country value is null
      [{ statusError: 1 }, NaN], // The country value is NaN
      [{ statusError: 2 }, 'samuel'], // The value is a strign
      [{ statusError: 2 }, true], // The value is boolean
      [{ statusError: 2 }, false], // The value is boolean
      [{ statusError: 2 }, {name: 'samuel'}], // The value is an object
      [{ statusError: 2 }, []], // The value is an object
    ])('should throw error with statusError %o when input is %s', (expectedStatusError, value) => {
      try{
        getEven(value)
      }catch(error){
        expect(error).toBeInstanceOf(Error);
        expect(error.cause).toHaveProperty('statusError', expectedStatusError.statusError);
      }
    });
   
    it("should return 22, 82, 4 from 22, 13, 73, 82, 4, 'number', null, true, false, NaN, {number: 10}", function() {

        // Arrange
        const input = [22, 13, 73, 82, 4, 'number', null, true, false, NaN, {number: 10}];

        // Act
        const result = getEven(input);
        const output = [22, 82, 4]
        
        // Assert
        expect(result).toEqual(output);
    });
   
    it("should return empty array from only strings array", function() {

        // Arrange
        const input = ['1', '2', '3'];

        // Act
        const result = getEven(input);
        const output = []
        
        // Assert
        expect(result).toEqual(output);

    });
   
    it("should return empty array from empty array", function() {

        // Arrange
        const input = [];

        // Act
        const result = getEven(input);
        const output = []
        
        // Assert
        expect(result).toEqual(output);

    });
   
    it("should return 22, 82, 4 from 22, 13, 73, 82, 4", function() {

        // Arrange
        const input = [22, 13, 73, 82, 4];

        // Act
        const result = getEven(input);
        const output = [22, 82, 4]
        
        // Assert
        expect(result).toEqual(output);
    });
   
    it("should return -22, -82, -4 from -22, -13, -73, -82, -4", function() {

        // Arrange
        const input = [-22, -13, -73, -82, -4];

        // Act
        const result = getEven(input);
        const output = [-22, -82, -4]
        
        // Assert
        expect(result).toEqual(output);
    });

})

