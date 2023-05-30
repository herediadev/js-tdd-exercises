const addNumbers = (numbers) => {
    if (!Array.isArray(numbers)) {
        throw new Error("Error");
    }
    
    return numbers.reduce((a, b) => { 
        return a + b;
    });

    /*let sum = 0;
    numbers.forEach(item => {
        sum = sum + item;
    })
    return sum;*/
};
module.exports = {
    addNumbers
};
