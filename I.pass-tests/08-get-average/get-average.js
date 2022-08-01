// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
// a entrada é um array de números e strings
// retorna a média de todos os números
// certifique-se de excluir as strings

const average = (numbersAndStrings) => {
    if (!Array.isArray) {
        throw new Error("¡Ocurrió un error!");
    }
    const isNumber = numbersAndStrings.every(num => typeof num !== "number" || typeof num !== "string");
    if (!isNumber) {
        throw new Error("¡Ocurrió un error!");
    }
    const justNumbers = numbersAndStrings.filter(num => typeof num === "number");
    const numberLength = justNumbers.length;
    return justNumbers.reduce((a, b) => a + b) / numberLength;
}

module.exports = { average };