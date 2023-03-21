import { describe , it , expect } from "vitest";
import { getLargestNumber } from "./largest-number.js";

describe('Return second and third value function', () => {
    it('should be a function', () => {
      // Act and Assert
      expect(typeof getLargestNumber).toBe('function');
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
        getLargestNumber(value)
      }catch(error){
        expect(error).toBeInstanceOf(Error);
        expect(error.cause).toHaveProperty('statusError', expectedStatusError.statusError);
      }
    });
   
    it("should return 88 from 3, 21, 88, 4, 36, 'number', null, true, false, NaN, {number: 10}", function() {

        // Arrange
        const input = [3, 21, 88, 4, 36, 'number', null, true, false, NaN, {number: 10}];
        const unchanged = [3, 21, 88, 4, 36, 'number', null, true, false, NaN, {number: 10}];

        // Act
        const result = getLargestNumber(input);
        const output = 88
        
        // Assert
        expect(result).toEqual(output);
        expect(input).toEqual(unchanged);
    });
   
    it("should return empty string from only strings array", function() {

        // Arrange
        const input = ['1', '2', '3'];
        const unchanged = ['1', '2', '3'];

        // Act
        const result = getLargestNumber(input);
        const output = ""
        
        // Assert
        expect(result).toEqual(output);
        expect(input).toEqual(unchanged);

    });
   
    it("should return 88 from array null, NaN, true, false, 3, 21, 88, 4, 36 no matter the initial values aren't numbers", function() {

        // Arrange
        const input = [null, NaN, true, false, 3, 21, 88, 4, 36];
        const unchanged = [null, NaN, true, false, 3, 21, 88, 4, 36];

        // Act
        const result = getLargestNumber(input);
        const output = 88
        
        // Assert
        expect(result).toEqual(output);
        expect(input).toEqual(unchanged);

    });
   
    it("should return 88 from 3, 21, 88, 4, 36", function() {

        // Arrange
        const input = [3, 21, 88, 4, 36];
        const unchanged = [3, 21, 88, 4, 36];

        // Act
        const result = getLargestNumber(input);
        const output = 88
        
        // Assert
        expect(result).toEqual(output);
        expect(input).toEqual(unchanged);
    });
   
    it("should return -4 from -4, -10, -32, -9, -21", function() {

        // Arrange
        const input = [-4, -10, -32, -9, -21];
        const unchanged = [-4, -10, -32, -9, -21];

        // Act
        const result = getLargestNumber(input);
        const output = -4
        
        // Assert
        expect(result).toEqual(output);
        expect(input).toEqual(unchanged);
    });

})
