const paintShop = (cars, newColorCar) => {
    if (!Array.isArray(cars)) {
        throw new Error("¿Ocurrió un error");
    }
    const isObject = cars.every(obj => typeof obj === "object");
    if (!isObject) {
        throw new Error("¿Ocurrió un error");
    }
    let newColor = "debe seleccionar el color";
    if (!newColorCar) {
        return newColor = "Debe seleccionar el color";
    }
    /*    const newArray = Array.from(cars); */
    /*   let newArrayCars = cars.map((x) => x); */
    const newArrayCars = JSON.parse(JSON.stringify(cars));
    newArrayCars[0].colour = newColorCar;
    
    return newArrayCars;
};

module.exports = { paintShop };
