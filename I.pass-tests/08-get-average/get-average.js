// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

const average = (numbers) => {
    if (!Array.isArray(numbers)) {
        throw new Error("Error");
    }
    const numArray = []
    
    numbers.forEach(item => { 
        if(typeof item === 'number'){
            numArray.push(item)
        }
    });

    const sum = numArray.reduce((a, b) => a + b);
    return sum / numArray.length;

}

module.exports = {
    average
}