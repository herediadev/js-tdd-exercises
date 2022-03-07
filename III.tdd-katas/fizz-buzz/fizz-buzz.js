const fizzbuzz = (number) => {
    let arr = []
    for(let i = number; i > 0; i--){
        arr.push(i)
    }

    const arrayOrder = arr.sort()
    
    const arrayNumbers = arrayOrder.map(number => {
        if(number % 3 === 0 && number % 5 === 0){
            return "FizzBuzz"
        }if(number % 3 === 0){
            return "Fizz"
        }if(number % 5 === 0){
            return "Buzz"
        }else{
            return number
        }
    })

    return arrayNumbers.join(', ');

}

module.exports = {
    fizzbuzz
};