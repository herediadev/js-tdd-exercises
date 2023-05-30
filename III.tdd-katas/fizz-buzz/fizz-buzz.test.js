import {fizzbuzz} from "./Fizz-Buzz";
import { describe, it, expect } from "vitest";

describe('Calculator add application', () => {

  it('should be a function', () => {
    // Act and Assert
    expect(typeof fizzbuzz).toBe('function');
  });

  it('should return 1,2,Fizz with this n = 3', () => {
    // Arrange
    const input = 3;

    // Act
    const result = fizzbuzz(input);
    const output = [1,2,'Fizz'];
    
    // Assert
    expect(result).toEqual(output);
  });

  it('should return 1,2,Fizz,4,Buzz with this n = 5', () => {
    // Arrange
    const input = 5;

    // Act
    const result = fizzbuzz(input);
    const output = [1,2,'Fizz',4,'Buzz'];
    
    // Assert
    expect(result).toEqual(output);
  });

  it('should return 1,2,Fizz,4,Buzz,...,14,FizzBuzz with this n = 15', () => {
    // Arrange
    const input = 15;

    // Act
    const result = fizzbuzz(input);
    const output = [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz'];
    
    // Assert
    expect(result).toEqual(output);
  });
  
})

