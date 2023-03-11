export const secondLargest = (numbers) => {
  if(numbers === null) throw new Error(-1)
  if(Number.isNaN(numbers)) throw new Error(-2)
  // if(numbers === NaN) throw new Error(-2)
  let largest = numbers[0]
  let scndLargest = null
  for (let i = 1; i <= numbers.length; i++) {
    if(numbers[i] > largest){
      scndLargest = largest
      largest = numbers[i]
    }
  }
  return scndLargest
}
