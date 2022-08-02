const paintShop = (cars, newColorCar) => {
 /*    const newArray = Array.from(cars); */
    const newArray = JSON.parse(JSON.stringify(cars));
    newArray[0].colour = newColorCar;

    return newArray;
};

module.exports = { paintShop };



/*  if (!Array.isArray(cars)) {
     throw new Error("¿Ocurrió un error");
 } */
/* const isString = words.every(word => typeof word === "string");
if (!isString) {
    throw new Error("¿Ocurrió un error");
} */

/*    let newArray =
   newArray[0].colour = newColorCar;
   return cars, newArray;  */

/* cars.forEach(car => {
    if (car && newColorCar) {
        return cars[0].colour = newColorCar;
    } 
    if (cars) {
        return cars;
    }
 
}) */

/*    return cars; */

