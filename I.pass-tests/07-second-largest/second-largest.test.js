import {describe , it , expect} from "vitest";
import {secondLargest} from "./second-largest";

describe('Remove middle word function', () => {
  it('should be a function', () => {
    // Act and Assert
    expect(typeof secondLargest).toBe('function');
  });

  it.each([
    [null, '-1'],
    [NaN, '-2']
  ])('should throw error with %s message when input is %s', (input, expectedErrorMessage) => {
    // Act and Assert
    expect(() => secondLargest(input)).toThrow(new RegExp(`^${expectedErrorMessage}$`));
  });

})
// test("Second largest", function() {
//   var numbers = [2, 0, 23, 0, 57, 1, 230];

//   var output = secondLargest(numbers);

//   expect(output).toEqual(57);
// });
