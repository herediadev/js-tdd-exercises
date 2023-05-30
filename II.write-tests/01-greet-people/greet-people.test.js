import {describe , it , expect} from "vitest";
import {greetPeople} from "./greet-people";

describe('Greet People function', () => {
  it('should be a function', () => {
    // Act and Assert
    expect(typeof greetPeople).toBe('function');
  });

  it.each([
    [{ statusError: 1 }, null], // The country value is null
    [{ statusError: 1 }, NaN], // The country value is NaN
    [{ statusError: 2 }, []], // The value is an empty array
    [{ statusError: 3 }, true], // The value is boolean
    [{ statusError: 3 }, false], // The value is boolean
    [{ statusError: 3 }, {}], // The value is empty object
    [{ statusError: 3}, {name: 'Irina'}], // Not is an array
    [{ statusError: 4}, [false, ['country', 'France'], {name: 'Irina'}]], // None of these values is an object
  ])('should throw error with statusError %o when input is %s', (expectedStatusError, value) => {
    try{
      greetPeople(value)
    }catch(error){
      expect(error).toBeInstanceOf(Error);
      expect(error.cause).toHaveProperty('statusError', expectedStatusError.statusError);
    }
  });

  it("should print list of names prefixed with Hello", function() {

    // Arrange
    const mentors = ['Irina', 'Ashleigh', 'Etza'];

    // Act
    const result = greetPeople(mentors);
    const expected = ['Hello Irina', 'Hello Ashleigh', 'Hello Etza']
    
    // Assert
    expect(result).toEqual(expected);
  });

  it("should print list of names prefixed with Hello no matter non string value", function() {

    // Arrange
    const mentors = ['Irina', 'Ashleigh', 'Etza', 123, {}, true, false, NaN, null];

    // Act
    const result = greetPeople(mentors);
    const expected = ['Hello Irina', 'Hello Ashleigh', 'Hello Etza']
    
    // Assert
    expect(result).toEqual(expected);
  });

})

