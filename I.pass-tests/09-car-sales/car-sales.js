const sales = (carsSold) => {
    if (!Array.isArray(carsSold)) {
        throw new Error("¡Ocurrió un error!")
    }
    const isObject = carsSold.every(obj => typeof obj === "object");
    if (!isObject) {
        throw new Error("¡Ocurrió un error!");
    }
    const result = {};
    carsSold.forEach(car => {
        result[car.make] = result[car.make] ? result[car.make] + car.price : car.price;
    })
    return result;
};

module.exports = { sales };
