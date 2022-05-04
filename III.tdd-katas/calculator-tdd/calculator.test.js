const { Add } = require('./calculator');

describe('calculator', () => {
  it('part1', () => {
	expect(Add('0')).toBe(0);
	expect(Add('1')).toBe(1);
	expect(Add('1,2')).toBe(3);
  });

  it('part2', () => {
	expect(Add('1,2,3')).toBe(6);
	expect(Add('1,2,3,4')).toBe(10);
	expect(Add('1,2,3,4,5')).toBe(15);
  })

  it('part3', () => {
	expect(Add('1\n2,3')).toBe(6);
	expect(Add('1\n2\n3\n4,5')).toBe(15);
  })

  it('test of delimitiers', () => {
	expect(Add("//;\n1;2", ';')).toBe(3);
  })

  it('test of negative numbers', () => {
	expect(Add('-1,2')).toBe('negatives not allowed: -1');
	expect(Add('-1,-2,3')).toBe('negatives not allowed: -1,-2');
  })
})