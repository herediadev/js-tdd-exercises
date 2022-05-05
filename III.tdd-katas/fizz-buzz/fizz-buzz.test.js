const { fizzBuz } = require("./fizz-buzz");

describe('fizz-buzz', () => { 
  it('if contain 3 is fizz, if contain 5 is buzz', () => {
    expect(fizzBuz(25)).toEqual([
      1,
      2,
      'Fizz',
      4,
      'Buzz',
      'Fizz',
      7,
      8,
      'Fizz',
      'Buzz',
      11,
      'Fizz',
      'Fizz',
      14,
      'FizzBuzz',
      16,
      17,
      'Fizz',
      19,
      'Buzz',
      'Fizz',
      22,
      'Fizz',
      'Fizz',
      'Buzz'
    ]);

  })
})