import { passwordVerification } from "./paswordVerification"
import { describe, it, expect } from "vitest";

describe('Password Verification application', () => {
    it('should be a function', () => {
      // Act and Assert
      expect(typeof passwordVerification).toBe('function');
    });

    it.each([
        ['Password should not be null', null],
        ['Password should be at least 8 characters long, have one uppercase letter at least, have one number at least', "qwer"], 
        ['Password should have one lowercase letter at least', 'QWERTY12'],
      ])('should throw error with message %s when input is %s', (expectedMessage, value) => {
        try{
            passwordVerification(value)
        }catch(error){
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toEqual(expectedMessage);
        }
    });

    it('should return OK when string is 8 or more chars, at least 1 uppercase, 1 lowercase', () => {
        // Arrange
        const input = "Qw345678";

        // Act
        const result = passwordVerification(input);
        const output = "OK"
        
        // Assert
        expect(result).toEqual(output);
    });

    it('should return OK when string is 8 or more chars and at least 1 lowercase with no uppercase', () => {
        // Arrange
        const input = "qw345678";

        // Act
        const result = passwordVerification(input);
        const output = "OK"
        
        // Assert
        expect(result).toEqual(output);
    });

});