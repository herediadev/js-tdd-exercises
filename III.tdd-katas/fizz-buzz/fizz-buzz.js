const fizzbuzz = (number) => {
    let arr = []
    for(let i = number; i > 0; i--){
        arr.push(i)
    }

    const arrayOrder = arr.sort((a, b) => {
        return a - b
    })
    console.log(arrayOrder)
    
    const arrayNumbers = arrayOrder.map(number => {
        if(number % 3 === 0 && number % 5 === 0){
            return "FizzBuzz"
        }if(number % 3 === 0 || number.toString().includes('3')){
            return "Fizz"
        }if(number % 5 === 0 || number.toString().includes('5')){
            return "Buzz"
        }else{
            return number
        }
    })
    console.log(arrayNumbers)

    return arrayNumbers.join(', ');

}

module.exports = {
    fizzbuzz
};