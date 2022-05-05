
const fizzBuz = (num) => {  
  const isMultipleOfThree = (num) => num % 3 === 0;
  const isMultipleOfFive = (num) => num % 5 === 0;
  const isMultipleOfThreeAndFive = (num) => isMultipleOfThree(num) && isMultipleOfFive(num);
  const contain3 = (num) => num.toString().includes('3');
  const contain5 = (num) => num.toString().includes('5');

  const printFizzBuzz = (num) => {
    let arr = [];
    
    for (let i = 1; i <= num; i++) {
      if (isMultipleOfThreeAndFive(i)) {
        arr.push('FizzBuzz');
      } else if (contain3(i) || isMultipleOfThree(i)) {
        arr.push('Fizz');
      } else if (contain5(i) || isMultipleOfFive(i)) {
        arr.push('Buzz');
      } else {
        arr.push(i);
      }
    }

    return arr;
  }

  return printFizzBuzz(num);
}

module.exports = {
  fizzBuz
}