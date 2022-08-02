const formatCities = (capitals, transform) => {
    return capitals.map((text) => transform(text));
}

module.exports = { formatCities };