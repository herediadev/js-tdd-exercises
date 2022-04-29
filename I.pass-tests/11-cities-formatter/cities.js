const formatCities = (cities, transform) => {
  if (!Array.isArray(cities)) return [];
  if (typeof transform !== "function") return [];

  return cities.map(transform);
};

module.exports = { formatCities };
