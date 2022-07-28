const addNumbers = (numbers) => {
    if (!Array.isArray(numbers)) {
        throw new Error("¡Ocurrió un error!");
    }
    const isNumber = numbers.every(number => typeof number === "number");
    if (!isNumber) {
        throw new Error("¡Ocurrió un error!");
    }
    return numbers.reduce((a, b) => a + b);
};

module.exports = { addNumbers };
