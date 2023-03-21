export const sales = (carsSold) => {
  if(carsSold === null) throw new Error('Invalid params', {cause: {statusError: 1}})
  if(Number.isNaN(carsSold)) throw new Error('Invalid params', {cause: {statusError: 2}})
  if(carsSold.length < 1) throw new Error('Invalid params', {cause: {statusError: 3}})
  if(carsSold === true || carsSold === false) throw new Error('Invalid params', {cause: {statusError: 4}})
  if(!Array.isArray(carsSold)) throw new Error('Invalid params', {cause: {statusError: 5}})

  const totals = {}
  for(let i = 0; i < carsSold.length; i++) {
    const car = carsSold[i]
    if(car.make && car.model && car.colour && car.price && typeof car.make === 'string' && typeof car.model === 'string' && typeof car.colour === 'string' && typeof car.price === 'number'){
      const make = car.make.trim()
      if(totals[make]) totals[make] += car.price
      else totals[make] = car.price
    }
  }
  return totals;
}
