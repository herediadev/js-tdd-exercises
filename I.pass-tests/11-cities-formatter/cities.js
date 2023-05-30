export const formatCities = ( value ) => {
    if(value === null || Number.isNaN(value)) throw new Error('Invalid params', {cause: {statusError: 1}})
    if(value.length < 1) throw new Error('Invalid params', {cause: {statusError: 2}})
    if(!Array.isArray(value)) throw new Error('Invalid params', {cause: {statusError: 3}})
    if(!value.some((entry) => typeof entry === 'object' && entry !== null && !Array.isArray(entry))) throw new Error('Invalid params', {cause: {statusError: 4}})

    let citiesFormated = []
    for(let i = 0; i < value.length; i++) {
        if(value[i].city && value[i].country){
            const cityString = value[i];
            citiesFormated[citiesFormated.length] = `${cityString.city.trim()} is the capital of ${cityString.country.trim()}`
        }
    }
    return citiesFormated;
}