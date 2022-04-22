const paint = (cars, color) => {
  if (cars.length === 0) return;
  const selectFirstCar = cars[0];
  const paintFirstCar = { ...selectFirstCar, colour: color };
  const paintCar = [paintFirstCar, ...cars.slice(1)];

  return paintCar;
};
module.exports = paint;
