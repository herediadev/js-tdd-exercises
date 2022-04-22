const formatCities = (cities, transform) => {
	if (!Array.isArray(cities)) return [];
	return cities.map(transform);
}

module.exports = { formatCities };
