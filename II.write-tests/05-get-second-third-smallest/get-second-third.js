const getSecondThird = (array) => {
  const newArray = array.slice();
  newArray.sort((x, y) => {
    return x - y;
  });
  return [newArray[1], newArray[2]];
};

module.exports = {
  getSecondThird
}
