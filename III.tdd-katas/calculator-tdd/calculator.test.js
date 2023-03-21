import { add } from "./calculator"
import { describe, it, expect } from "vitest";

describe('Calculator add application', () => {
    it('should be a function', () => {
      // Act and Assert
      expect(typeof add).toBe('function');
    });

    it('should return empty string when pass empty string', () => {
        // Arrange
        const input = "";

        // Act
        const result = add(input);
        const output = 0
        
        // Assert
        expect(result).toEqual(output);
    });

    it('should return 1 when pass 1', () => {
        // Arrange
        const input = "1";

        // Act
        const result = add(input);
        const output = 1
        
        // Assert
        expect(result).toEqual(output);
    });

    it('should return 3 when pass 1,2', () => {
        // Arrange
        const input = "1,2";

        // Act
        const result = add(input);
        const output = 3
        
        // Assert
        expect(result).toEqual(output);
    });

    it('should return 155 when pass 1,2,3,4,5,6,7,8,9,10,20,30,50', () => {
        // Arrange
        const input = "1,2,3,4,5,6,7,8,9,10,20,30,50";

        // Act
        const result = add(input);
        const output = 155
        
        // Assert
        expect(result).toEqual(output);
    });

    it('should return 3 when pass 1\n2', () => {
        // Arrange
        const input = "1\n2";

        // Act
        const result = add(input);
        const output = 3
        
        // Assert
        expect(result).toEqual(output);
    });

    it('should return 6 when pass 1\n2,3', () => {
        // Arrange
        const input = "1\n2,3";

        // Act
        const result = add(input);
        const output = 6
        
        // Assert
        expect(result).toEqual(output);
    });

    it('should return 6 when pass ;\n1;2\n3', () => {
        // Arrange
        const input = ";\n1;2;3";

        // Act
        const result = add(input);
        const output = 6
        
        // Assert
        expect(result).toEqual(output);
    });

    it('should return error Negatives not allowed: -1 when pass 1,4,-1', () => {

        // Arrange
        const input = "1,4,-1";

        // Act and Assert
        expect(() => add(input)).toThrow(/^Negatives not allowed: -1$/);
    });

    it('should return error when pass 1,4,-1,-2 because negative numbers, and return all the negative numbers on error string', () => {

        // Arrange
        const input = "1,4,-1,-2";

        // Act and Assert
        expect(() => add(input)).toThrow(/^Negatives not allowed: -1, -2$/);
    });

    it('should return 1005 when pass 1,4,1001,1000', () => {

        // Arrange
        const input = "1,4,1001,1000";

        // Act
        const result = add(input);
        const output = 1005
        
        // Assert
        expect(result).toEqual(output);
    });

    
})