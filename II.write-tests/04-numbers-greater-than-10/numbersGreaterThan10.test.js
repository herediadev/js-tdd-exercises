import { describe , it , expect } from "vitest";
import { largerThanTen } from "./numbersGreaterThan10";

describe('Return numbers greater than 10 function', () => {
    it('should be a function', () => {
      // Act and Assert
      expect(typeof largerThanTen).toBe('function');
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
        largerThanTen(value)
      }catch(error){
        expect(error).toBeInstanceOf(Error);
        expect(error.cause).toHaveProperty('statusError', expectedStatusError.statusError);
      }
    });
   
    it("should return 32, 21 from 4, 10, 32, 9, 21, 'number', null, true, false, NaN, {number: 10}", function() {

        // Arrange
        const input = [4, 10, 32, 9, 21, 'number', null, true, false, NaN, {number: 10}];

        // Act
        const result = largerThanTen(input);
        const output = [32, 21]
        
        // Assert
        expect(result).toEqual(output);
    });
   
    it("should return empty array from only strings array", function() {

        // Arrange
        const input = ['1', '2', '3'];

        // Act
        const result = largerThanTen(input);
        const output = []
        
        // Assert
        expect(result).toEqual(output);
    });
   
    it("should return 32, 21 from 4, 10, 32, 9, 21", function() {

        // Arrange
        const input = [4, 10, 32, 9, 21];

        // Act
        const result = largerThanTen(input);
        const output = [32, 21]
        
        // Assert
        expect(result).toEqual(output);
    });
   
    it("should return empty array from -4, -10, -32, -9, -21", function() {

        // Arrange
        const input = [-4, -10, -32, -9, -21];

        // Act
        const result = largerThanTen(input);
        const output = []
        
        // Assert
        expect(result).toEqual(output);
    });

})

