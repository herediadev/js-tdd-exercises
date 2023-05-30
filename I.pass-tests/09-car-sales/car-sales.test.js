import {describe , it , expect} from "vitest";
import {sales} from "./car-sales";

describe('Car sales function', () => {
  it('should be a function', () => {
    // Act and Assert
    expect(typeof sales).toBe('function');
  });

  it.each([
    [{ statusError: 1 }, null], // The value is null
    [{ statusError: 2 }, NaN], // The value is NaN
    [{ statusError: 3 }, []], // The value is an empty array
    [{ statusError: 4 }, true], // The value is boolean
    [{ statusError: 4 }, false], // The value is boolean
    [{ statusError: 5 }, ['window', 'template', true, 2]], // None of these values is an object
  ])('should throw error with statusError %o when input is %s', (expectedStatusError, input) => {
    try{
      sales(input)
    }catch(error){
      expect(error).toBeInstanceOf(Error);
      expect(error.cause).toHaveProperty('statusError', expectedStatusError.statusError);
    }
  });

  it('should return Ford: 22999, Honda: 8000, "Land Rover": 21000, Toyota: 6500 on car objects', () => {
    // Arrange
    const carsSold = [
      { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 },
      { make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
      { make: "Toyota", model: "Prius", colour: "Silver", price: 6500 },
      { make: "Honda", model: "Civic", colour: "Yellow", price: 8000 },
      { make: "Ford", model: "Fiesta", colour: "Red", price: 15000 },
      { make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
      { make: "Ford", model: "Fiesta", colour: "Green", price: 2000 }
    ];

    // Act
    const totals = {
      Ford: 22999,
      Honda: 8000,
      "Land Rover": 21000,
      Toyota: 6500
    };
    const output = sales(carsSold);
    
    // Assert
    expect(output).toEqual(totals);
  });

  it('should return Ford: 5999, "Land Rover": 12000 , Honda: 15000 in array with different object formats and extra atts', () => {
    // Arrange
    const carsSold = [
      { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 },
      { make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
      { make: "Honda", model: "Civic", colour: "Blue", price: 15000, status: 'new' },
      { make: "Toyota", model: "Prius", colouring: "Silver", pricing: 6500 },
    ];

    // Act
    const totals = {
      Ford: 5999,
      "Land Rover": 12000,
      Honda: 15000
    };
    const output = sales(carsSold);
    
    // Assert
    expect(output).toEqual(totals);
  });

  it('should return Ford: 5999 in array with only 1 object', () => {
    // Arrange
    const carsSold = [
      { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 }
    ];

    // Act
    const totals = {
      Ford: 5999,
    };
    const output = sales(carsSold);
    
    // Assert
    expect(output).toEqual(totals);
  });

  it('should return Ford: 25999 in array with only multiple objects by the same make', () => {
    // Arrange
    const carsSold = [
      { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 },
      { make: "Ford", model: "Fiesta", colour: "Red", price: 5000 },
      { make: "Ford", model: "Fiesta", colour: "Red", price: 5000 },
      { make: "Ford", model: "Fiesta", colour: "Red", price: 10000 },
    ];

    // Act
    const totals = {
      Ford: 25999,
    };
    const output = sales(carsSold);
    
    // Assert
    expect(output).toEqual(totals);
  });

  it('should return Ford: 10999 in array with only multiple objects by the same make but differents way to write it', () => {
    // Arrange
    const carsSold = [
      { make: "Ford ", model: "Fiesta", colour: "Red", price: 5999 },
      { make: " Ford", model: "Fiesta", colour: "Red", price: 5000 },
      { Make: "Ford", model: "Fiesta", colour: "Red", price: 5000 },
      { MAKE: "Ford", model: "Fiesta", colour: "Red", price: 10000 },
    ];

    // Act
    const totals = {
      Ford: 10999,
    };
    const output = sales(carsSold);
    
    // Assert
    expect(output).toEqual(totals);
  });
})

