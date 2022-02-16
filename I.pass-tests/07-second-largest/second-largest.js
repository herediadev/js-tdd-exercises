const secondLargest = (numbers) => {
    if (!Array.isArray(numbers)) {
        throw new Error("Error");
    }

    const orderArray = numbers.sort(function(a, b){return a - b});
    return numbers[orderArray.length-2]
    //return orderArray[orderArray.length-2]
}



module.exports = {
    secondLargest
}