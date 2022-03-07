const calculator = (numbers) => {

    if(numbers.length === 0){
        return 0;
    }
    const num = numbers.match(/-?\d+(\.\d+)?/g)
    console.log(num)

    return num.reduce((acumulador, number) => {
        if(Number(number) > 1000){
            return acumulador;
        }
        if(Number(number) < 0){
            throw new Error("negatives not allowed: " + number);
        }
        return Number(acumulador) + Number(number)
    }, 0)
     
}

module.exports = {
    calculator
}
