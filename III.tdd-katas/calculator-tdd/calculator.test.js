const { calculator } = require('./calculator.js')

describe('add numbers', () => {
	test('if empty string return 0', () => {
		expect(calculator('')).toBe(0);
	});

	test('For 2 + 2 should be return 4', () => {
		expect(calculator(2,2)).toEqual(4)
	})
})