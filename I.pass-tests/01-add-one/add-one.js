const addOne = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new Error("¡Ocurrió un error!")
  }
  const isNumber = numbers.every(num => typeof num === "number");
  if (!isNumber) {
    throw new Error("¡Ocurrió un error!");
  }
  return numbers.map(number => ++number);
}

module.exports = { addOne };

//   if (numbers) {
//     const isNumber = numbers.every(num => typeof num === "number");
//     if (isNumber) {
//       return numbers.map(number => ++number);
//     } else {
//       throw new Error("¡Ocurrió un error!");
//     }
//   } else {
//     throw new Error("¡Ocurrió un error!");
//   }
// }
  // if (!Array.isArray(numbers)) {
  //   throw new Error("¡Ocurrió un error!")
  // }
  // const isNumber = numbers.every(num => typeof num === "number");
  // if (isNumber) {
  //   return numbers.map(number => ++number);
  // }

