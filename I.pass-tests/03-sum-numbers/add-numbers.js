const addNumbers = (numbers) =>{
    let sum = 0;
    numbers.forEach(item => {
        sum = sum + item;
    })
    return sum;

}
module.exports = {addNumbers};
