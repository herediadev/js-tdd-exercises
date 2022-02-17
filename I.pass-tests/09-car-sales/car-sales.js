const sales = (cars) => {
    const makeCars = cars.map( car => {
        return car.make
    })
    const brands = [...new Set(makeCars)].sort();
    const brandTotals = brands.map(brand => {
        return {
            brand: brand,
            total: cars.filter(car => car.make === brand).reduce((acumulador, car) => acumulador + car.price, 0)
        }
    })
    const totals = brandTotals.reduce((obj, brandTot) => {
        obj[brandTot.brand] = brandTot.total;
        return obj;
    }, {});
    console.log(totals);
    return totals
}

module.exports = {
    sales
}