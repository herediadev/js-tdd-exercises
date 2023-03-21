import { describe , it , expect } from "vitest";
import { getSecondThird } from "./get-second-third.js";

describe('Return second and third value function', () => {
    it('should be a function', () => {
      // Act and Assert
      expect(typeof getSecondThird).toBe('function');
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
        getSecondThird(value)
      }catch(error){
        expect(error).toBeInstanceOf(Error);
        expect(error.cause).toHaveProperty('statusError', expectedStatusError.statusError);
      }
    });
   
    it("should return 32, 21 from 90, 5, 11, 8, 6, 'number', null, true, false, NaN, {number: 10}", function() {

        // Arrange
        const input = [90, 5, 11, 8, 6, 'number', null, true, false, NaN, {number: 10}];
        const unchanged = [90, 5, 11, 8, 6, 'number', null, true, false, NaN, {number: 10}];

        // Act
        const result = getSecondThird(input);
        const output = [6, 8]
        
        // Assert
        expect(result).toEqual(output);
        expect(input).toEqual(unchanged);
    });
   
    it("should return empty array from only strings array", function() {

        // Arrange
        const input = ['1', '2', '3'];
        const unchanged = ['1', '2', '3'];

        // Act
        const result = getSecondThird(input);
        const output = []
        
        // Assert
        expect(result).toEqual(output);
        expect(input).toEqual(unchanged);

    });
   
    it("should return empty array from only two value", function() {

        // Arrange
        const input = [1,2];
        const unchanged = [1,2];

        // Act
        const result = getSecondThird(input);
        const output = []
        
        // Assert
        expect(result).toEqual(output);
        expect(input).toEqual(unchanged);

    });
   
    it("should return 2,3 from 1,2,3 array", function() {

        // Arrange
        const input = [1,2,3];
        const unchanged = [1,2,3];

        // Act
        const result = getSecondThird(input);
        const output = [2,3]
        
        // Assert
        expect(result).toEqual(output);
        expect(input).toEqual(unchanged);

    });
   
    it("should return 6, 8 from 90, 5, 11, 8, 6", function() {

        // Arrange
        const input = [90, 5, 11, 8, 6];
        const unchanged = [90, 5, 11, 8, 6];

        // Act
        const result = getSecondThird(input);
        const output = [6, 8]
        
        // Assert
        expect(result).toEqual(output);
        expect(input).toEqual(unchanged);
    });
   
    it("should return -21, -10 from -4, -10, -32, -9, -21", function() {

        // Arrange
        const input = [-4, -10, -32, -9, -21];
        const unchanged = [-4, -10, -32, -9, -21];

        // Act
        const result = getSecondThird(input);
        const output = [-21, -10]
        
        // Assert
        expect(result).toEqual(output);
        expect(input).toEqual(unchanged);
    });

})
