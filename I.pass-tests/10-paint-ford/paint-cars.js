export const paintShop = (cars) => {
    if(cars === null) throw new Error('Invalid params', {cause: {statusError: 1}})
    if(Number.isNaN(cars)) throw new Error('Invalid params', {cause: {statusError: 2}})
    if(cars.length < 1) throw new Error('Invalid params', {cause: {statusError: 3}})
    if(cars === true || cars === false) throw new Error('Invalid params', {cause: {statusError: 4}})
    if(!Array.isArray(cars)) throw new Error('Invalid params', {cause: {statusError: 5}})

    const brandToPaint = 'ford'
    const color = 'pink'
    const carsPainted = []
    let count = -1
    for(let i = 0; i < cars.length; i++) {
        const car = cars[i]
        if(typeof car === 'object' && car.colour) {
            count++
            if(car['make'].toLowerCase().trim() == brandToPaint) {
                carsPainted[count] = {...car, colour: 'Pink'}
            }else{
                carsPainted[count] = {...car}
            }
        }
    }
    return carsPainted
}