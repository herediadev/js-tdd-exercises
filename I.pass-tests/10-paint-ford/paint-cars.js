const paintShop = (cars) => {
    
    return cars.map(car => {
        if(car.make === "Ford"){
            return {
                make: car.make,
                model: car.model,
                color: "Pink"
            };
        }
        return {
            make: car.make,
            model: car.model,
            color: car.colour
        };
    });
        
        

}

module.exports = {
    paintShop
}