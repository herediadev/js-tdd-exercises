const getSecondThird = (array) => {
  //const newArray = array.slice();
  array.sort((x, y) => {
    return x - y;
  });
  return [array[1], array[2]];
};

module.exports = {
  getSecondThird
}
