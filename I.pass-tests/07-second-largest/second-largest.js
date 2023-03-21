export const secondLargest = (numbers) => {
  if(numbers === null) throw new Error('Invalid params', {cause: {statusError: 1}})
  if(Number.isNaN(numbers)) throw new Error('Invalid params', {cause: {statusError: 2}})
  if(numbers.length <= 1) throw new Error('Invalid params', {cause: {statusError: 3}})

  let largest = numbers[0]
  let scndLargest = null
  let allZeros = true
  let valid = false
  for (let i = 0; i < numbers.length; i++) {
    if (Number.isInteger(numbers[i])) {
      valid = true
      if (numbers[i] !== 0) {
        allZeros = false
      }
      if (numbers[i] > largest) {
        scndLargest = largest
        largest = numbers[i]
      } else if (numbers[i] < largest && (scndLargest === null || numbers[i] > scndLargest)) {
        scndLargest = numbers[i]
      }
    } 
  }
  if (allZeros && valid) {
    return 0
  } else if (scndLargest === null) {
    throw new Error('Invalid params', {cause: {statusError: 4}})
  }
  return scndLargest;
}
