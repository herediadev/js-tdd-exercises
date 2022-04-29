const sales = (carsSold) => {
  const totals = {};

  if (carsSold.length === 0) return('No solds yet');
  
  carsSold.forEach((car) => {
    // TODO: Comprobate valid values
    if (car.make in totals) {
      totals[car.make] += car.price;
    } else {
      totals[car.make] = car.price;
    }
  });
  return totals;
};

module.exports = { sales };
