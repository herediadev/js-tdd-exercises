import {describe , it , expect} from "vitest";
import {findTheNeedle} from "./find-needle";

describe('Find the needle function', () => { 
  it('should be a function', () => {

    // Act and Assert
    expect(typeof findTheNeedle).toBe('function');
  });
  
  it('Should throw error when words is null', () => {

    // Arrange
    const words = null;
    const needle = 'needle';

    // Act and Assert
    expect(() => findTheNeedle(words, needle)).toThrow(/^Invalid words or needle format$/);
  });
  
  it('Should throw error when words is boolean', () => {

    // Arrange
    const words = false;
    const needle = 'needle';

    // Act and Assert
    expect(() => findTheNeedle(words, needle)).toThrow(/^Invalid words or needle format$/);
  });
  
  it('Should throw error when words is empty array', () => {

    // Arrange
    const words = [];
    const needle = 'needle';

    // Act and Assert
    expect(() => findTheNeedle(words, needle)).toThrow(/^Invalid words or needle format$/);
  });
  
  it('Should throw error when neddle is null', () => {

    // Arrange
    const words = ["plant", "shelf", "arrow", "bird"];
    const neddle = null;

    // Act and Assert
    expect(() => findTheNeedle(words, neddle)).toThrow(/^Invalid words or needle format$/);
  });
  
  it('Should throw error when neddle is boolean', () => {

    // Arrange
    const words = ["plant", "shelf", "arrow", "bird"];
    const neddle = true;

    // Act and Assert
    expect(() => findTheNeedle(words, neddle)).toThrow(/^Invalid words or needle format$/);
  });
  
  it('Should throw error when neddle is a strings array', () => {

    // Arrange
    const words = ["plant", "shelf", "arrow", "bird"];
    const neddle = ['plant'];

    // Act and Assert
    expect(() => findTheNeedle(words, neddle)).toThrow(/^Invalid words or needle format$/);
  });
  
  it('Should throw error when neddle is empty', () => {

    // Arrange
    const words = ["plant", "shelf", "arrow", "bird"];
    const neddle = '';

    // Act and Assert
    expect(() => findTheNeedle(words, neddle)).toThrow(/^Invalid words or needle format$/);
  });
  
  it('Should return the correct position when compare with the same value but not integer', () => {

    // Arrange
    const words = ["plant", "shelf", "arrow", "bird", 5, '5'];
    const needle = '5';
    const expected = 5;

    // Act
    const output = findTheNeedle(words, needle);
    
    // Assert
    expect(output).toEqual(expected);

  });
  
  it('Should return the correct position when the only value on words array are the needle', () => {

    // Arrange
    const words = ["plant"];
    const needle = 'plant';
    const expected = 0;

    // Act
    const output = findTheNeedle(words, needle);
    
    // Assert
    expect(output).toEqual(expected);

  });
  
  it('Should return the first position when the needle appear multiple times on words array', () => {

    // Arrange
    const words = ["plant", "shelf", "arrow", "bird", "shelf", "shelf"];
    const needle = 'shelf';
    const expected = 1;

    // Act
    const output = findTheNeedle(words, needle);
    
    // Assert
    expect(output).toEqual(expected);

  });
  
  it('Should return the 3rd position', () => {

    // Arrange
    const words = ["plant", "shelf", "arrow", "bird", "shelf", "shelf"];
    const needle = 'bird';
    const expected = 3;

    // Act
    const output = findTheNeedle(words, needle);
    
    // Assert
    expect(output).toEqual(expected);

  });
  
  it('Should return -1 when the needle is not in the words array', () => {

    // Arrange
    const words = ["plant", "shelf", "arrow", "bird"];
    const needle = 'food';
    const expected = -1;

    // Act
    const output = findTheNeedle(words, needle);
    
    // Assert
    expect(output).toEqual(expected);

  });

})
