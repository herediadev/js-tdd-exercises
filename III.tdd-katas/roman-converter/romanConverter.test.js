import { converterToOldRoman, converterToModernRoman } from "./romanConverter.js";
import { describe, it, expect } from "vitest";

describe('Password Verification application', () => {

    it('should be a function', () => {
      // Act and Assert
      expect(typeof converterToOldRoman).toBe('function');
    });

    it.each([ // Basic conversion tests
        [1, 'I'],
        [5, "V"], 
        [10, 'X'],
        [50, 'L'],
        [100, 'C'],
        [500, 'D'],
        [1000, 'M'],
      ])('When input is %d should return %s', (input, valueRoman) => {
        const output = converterToOldRoman(input);
        expect(output).toEqual(valueRoman);
    });

    it.each([ // Old Roman numbers conversion
        [1, 'I'],
        [3, "III"], 
        [4, "IIII"], 
        [7, 'VII'],
        [15, 'XV'],
        [18, 'XVIII'],
        [22, 'XXII'],
      ])('When input is %d should return %s', (input, valueRoman) => {
        const output = converterToOldRoman(input);
        expect(output).toEqual(valueRoman);
    });

    it.each([ // Modern Roman numbers conversion
        [4, 'IV'],
        [9, "IX"], 
        [14, "XIV"], 
        [44, 'XLIV'],
        [90, 'XC'],
        [400, 'CD'],
        [944, 'CMXLIV'],
        [2999, 'MMCMXCIX'],
      ])('When input is %d should return %s', (input, valueRoman) => {
        const output = converterToModernRoman(input);
        expect(output).toEqual(valueRoman);
    });

})