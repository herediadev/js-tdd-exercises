const secondLargest = (numbers) => {
    if (!Array.isArray(numbers)) {
        throw new Error("Error");
    }

    numbers.sort((a, b) => {return a - b});
    
    return numbers[numbers.length-2]
    //return orderArray[orderArray.length-2]
}



module.exports = {
    secondLargest
}
