// int is an integer
// a factorial is the product of all non-negative integers
// less than or equal to the iniital number.

// for example the factorial of 5 is 120
// 120 = 1 * 2 * 3 * 4 * 5

// calculate and return the factorial of int
// note: factorial of 0 is 1

export const factorial = (int) => {
  if (isNaN(int) || int === null || !Number.isInteger(int)) {
    throw new Error('Invalid format');
  }else if(int < 0) {
    return -1;
  }else{
    let result = 1;
    for (let i = 1; i <= int; i++) {
      result *= i;
    }
    return result;
  }
};
