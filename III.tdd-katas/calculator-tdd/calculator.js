const calculator = (numbers) => {
    if(numbers.length === 0){
        return 0;
    }
    return numbers.reduce((acumulador, numbers) => { 
        return acumulador + numbers;
    });
}

module.exports = {
    calculator
}
