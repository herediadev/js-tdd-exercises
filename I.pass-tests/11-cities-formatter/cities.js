const formatCities = (capitals, transform) => {
    if (!Array.isArray(capitals)) {
        throw new Error("¿Ocurrió un error");
    }
    const isObject = capitals.every(obj => typeof obj === "object");
    if (!isObject) {
        throw new Error("¿Ocurrió un error");
    }
    return capitals.map((text) => transform(text));
}

module.exports = { formatCities };