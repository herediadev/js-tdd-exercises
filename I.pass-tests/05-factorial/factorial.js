// int is an integer
// a factorial is the product of all non-negative integers
// less than or equal to the iniital number.

// for example the factorial of 5 is 120
// 120 = 1 * 2 * 3 * 4 * 5

// calculate and return the factorial of int
// note: factorial of 0 is 1
const createArray = (int) => {
    return [...Array(int).keys()].map(item => item + 1)
}
const factorial = (int) => {
    if(int === 0){
        return 1;
    }
    const targetArray = createArray(int);
   
    return targetArray.reduce((a, b) => { 
        return a * b;
    });
}

module.exports = {
    factorial
};
