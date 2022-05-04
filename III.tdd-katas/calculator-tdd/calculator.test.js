const { Add } = require('./calculator');

describe('Add function', () => {
  it('The string argument can contain 0, 1 or 2 numbers, and will return their sum (for an empty string it will return 0) for example ``""`` or ``"1"`` or ``"1,2"``.', () => {
	expect(Add('0')).toBe(0);
	expect(Add('1')).toBe(1);
	expect(Add('1,2')).toBe(3);
  });

  it('Allow the ``add()`` method to handle an unknown amount of numbers.', () => {
	expect(Add('1,2,3')).toBe(6);
	expect(Add('1,2,3,4')).toBe(10);
	expect(Add('1,2,3,4,5')).toBe(15);
  })

  it('Allow the ``add()`` method to handle new lines between numbers (instead of commas). * the following input is ok:  ``"1\n2,3"`` (will equal 6)', () => {
	expect(Add('1\n2,3')).toBe(6);
	expect(Add('1\n2\n3\n4,5')).toBe(15);
  })

  it('Support different delimiters: to change a delimiter?', () => {
	expect(Add("//;\n1;2", ';')).toBe(3);
	expect(Add("//!2!3!4", '!')).toBe(9);
  })

  it('The existence of negative numbers must be verified, in case of containing it, throw a message ...', () => {
	expect(Add('-1,2')).toBe('negatives not allowed: -1');
	expect(Add('-1,-2,3')).toBe('negatives not allowed: -1,-2');
  })

  it('Should be verified that numbers greater than 1000 should be ignored.', () => {
	expect(Add('1001')).toBe(0);
	expect(Add('1001,2,3,4,5')).toBe(14);
  })
})