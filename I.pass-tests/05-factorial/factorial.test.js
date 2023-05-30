import {describe , it , expect} from "vitest";
import {factorial} from "./factorial";

describe('Factorial function', () => { 
  it('should be a function', () => {
    // Act and Assert
    expect(typeof factorial).toBe('function');
  });

  it('Should throw error when int is null, boolean, NaN or empty string', () => {

    // Arrange
    const int1 = null;
    const int2 = true;
    const int3 = NaN;
    const int4 = '';

    // Act and Assert
    expect(() => factorial(int1)).toThrow(/^Invalid format$/);
    expect(() => factorial(int2)).toThrow(/^Invalid format$/);
    expect(() => factorial(int3)).toThrow(/^Invalid format$/);
    expect(() => factorial(int4)).toThrow(/^Invalid format$/);
  });

  it('Should throw error when int is string, object or array', () => {

    // Arrange
    const int1 = '5';
    const int2 = [5];
    const int3 = {value: 5};

    // Act and Assert
    expect(() => factorial(int1)).toThrow(/^Invalid format$/);
    expect(() => factorial(int2)).toThrow(/^Invalid format$/);
    expect(() => factorial(int3)).toThrow(/^Invalid format$/);

  });

  it('Should return 1 when int is 0', () => {

    // Arrange
    const int1 = 0;
    const exp1 = 1;
    
    // Act
    const out1 = factorial(int1);
    
    // Assert
    expect(out1).toEqual(exp1);
  });

  it('Should return correct numbers -> 5=120, 9=362880, 1=1, 3=6, 1=1', () => {

    // Arrange
    const int1 = 5;
    const exp1 = 120;

    const int2 = 9;
    const exp2 = 362880;

    const int3 = 1;
    const exp3 = 1;

    const int4 = 3;
    const exp4 = 6;

    const int5 = 1;
    const exp5 = 1;
    
    // Act
    const out1 = factorial(int1);
    const out2 = factorial(int2);
    const out3 = factorial(int3);
    const out4 = factorial(int4);
    const out5 = factorial(int5);
    
    // Assert
    expect(out1).toEqual(exp1);
    expect(out2).toEqual(exp2);
    expect(out3).toEqual(exp3);
    expect(out4).toEqual(exp4);
    expect(out5).toEqual(exp5);
    
  });

  it('Should return correct -1 when the number is negative', () => {

    // Arrange
    const int1 = -5;
    const exp1 = -1;
    
    // Act
    const out1 = factorial(int1);
    
    // Assert
    expect(out1).toEqual(exp1);

  });
})