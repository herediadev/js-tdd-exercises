import {describe , it , expect} from "vitest";
import {paintShop} from "./paint-cars";

describe('Paint Shop function', () => {
  it('should be a function', () => {
    // Act and Assert
    expect(typeof paintShop).toBe('function');
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
      paintShop(input)
    }catch(error){
      expect(error).toBeInstanceOf(Error);
      expect(error.cause).toHaveProperty('statusError', expectedStatusError.statusError);
    }
  });

  it('should return array with only ford painted', () => {
    // Arrange
    const cars = [
      { make: "Ford", model: "Fiesta", colour: "Red" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Honda", model: "Civic", colour: "Yellow" }
    ];

    const unpaintedCars = [
      { make: "Ford", model: "Fiesta", colour: "Red" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Honda", model: "Civic", colour: "Yellow" }
    ];

    const repaintedCars = [
      { make: "Ford", model: "Fiesta", colour: "Pink" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Honda", model: "Civic", colour: "Yellow" }
    ];
    
    // Act
    const output = paintShop(cars, "Pink");
    
    // Assert
    expect(output).toEqual(repaintedCars);
    expect(cars).toEqual(unpaintedCars);
  });

  it('should return array with only ford painted, but objects has extra atts', () => {
    // Arrange
    const cars = [
      { make: "Ford", model: "Fiesta", colour: "Red" },
      { make: "Land Rover", model: "Defender", colour: "Muddy", att1: 'Lorem' },
      { make: "Toyota", model: "Prius", colour: "Silver", att2: 'Dolor', att3: 'Ipsum' },
      { make: "Honda", model: "Civic", colour: "Yellow", att4: 'Sit' }
    ];

    const unpaintedCars = [
      { make: "Ford", model: "Fiesta", colour: "Red" },
      { make: "Land Rover", model: "Defender", colour: "Muddy", att1: 'Lorem' },
      { make: "Toyota", model: "Prius", colour: "Silver", att2: 'Dolor', att3: 'Ipsum' },
      { make: "Honda", model: "Civic", colour: "Yellow", att4: 'Sit' }
    ];

    const repaintedCars = [
      { make: "Ford", model: "Fiesta", colour: "Pink" },
      { make: "Land Rover", model: "Defender", colour: "Muddy", att1: 'Lorem' },
      { make: "Toyota", model: "Prius", colour: "Silver", att2: 'Dolor', att3: 'Ipsum' },
      { make: "Honda", model: "Civic", colour: "Yellow", att4: 'Sit' }
    ];
    
    // Act
    const output = paintShop(cars, "Pink");
    
    // Assert
    expect(output).toEqual(repaintedCars);
    expect(cars).toEqual(unpaintedCars);
  });

  it("should return fords painted and corrects values no matter there is no object in an array's value", () => {
    // Arrange
    const cars = [
      { make: "Ford", model: "Fiesta", colour: "Red" },
      'ford',
      { make: "Land Rover", model: "Defender", colour: "Muddy"},
    ];

    const unpaintedCars = [
      { make: "Ford", model: "Fiesta", colour: "Red" },
      'ford',
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
    ];

    const repaintedCars = [
      { make: "Ford", model: "Fiesta", colour: "Pink" },
      { make: "Land Rover", model: "Defender", colour: "Muddy"},
    ];
    
    // Act
    const output = paintShop(cars, "Pink");
    
    // Assert
    expect(output).toEqual(repaintedCars);
    expect(cars).toEqual(unpaintedCars);
  });

  it("should return empty array when objects didn't have colour atts", () => {
    // Arrange
    const cars = [
      { make: "Ford", model: "Fiesta"},
      'ford',
      { make: "Land Rover", model: "Defender"},
    ];

    const unpaintedCars = [
      { make: "Ford", model: "Fiesta"},
      'ford',
      { make: "Land Rover", model: "Defender" },
    ];

    const repaintedCars = [];
    
    // Act
    const output = paintShop(cars, "Pink");
    
    // Assert
    expect(output).toEqual(repaintedCars);
    expect(cars).toEqual(unpaintedCars);
  });

  it("should return empty array when cars array are only non objects", () => {
    // Arrange
    const cars = [
      'colour',
      'ford',
      'ferrari',
    ];

    const unpaintedCars = [
      'colour',
      'ford',
      'ferrari',
    ];

    const repaintedCars = [];
    
    // Act
    const output = paintShop(cars, "Pink");
    
    // Assert
    expect(output).toEqual(repaintedCars);
    expect(cars).toEqual(unpaintedCars);
  });
})

