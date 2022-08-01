const secondLargest = (numbers) => {
    if (!Array.isArray(numbers)) {
        throw new Error("¿Ocurrió un error!")
    }
    const isNumber = numbers.every(num => typeof num === "number");
    if (!isNumber) {
        throw new Error("¡Ocurrió un error!");
    }
    const orderNumbers = numbers.sort((a, b) => (a - b));
    if (orderNumbers) {
        orderNumbers.pop();
        return Math.max(...orderNumbers);
    }

};

module.exports = { secondLargest };