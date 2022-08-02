const factorial = (int) => {
    if (int < 0) {
        throw new Error("¡Ocurrió un error!")
    }
    const isNumber = typeof int === "number";
    if (!isNumber) {
        throw new Error("¡Ocurrió un error!");
    }
    let total = 1;
    for (let i = int; i >= 1; i--) {
        total = total * i;
    }
    return total;
}

module.exports = { factorial };
