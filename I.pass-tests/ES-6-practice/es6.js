// Turn this function into an arrow function
export const arrow = () => {
  return "es6 is awesome!";
}

//Use the es6 syntax for default parameter
export const defaultParameter = (name = "sam") => {
  return name;
}

// Use the spread operator to combine arr1 and arr2
export const combineArrays = (arr1, arr2) => {
  return [...arr1, ...arr2]
}

//use destructuring to return the object's cyf property
export const destructuring = ({ cyf }) => {
  return cyf;
}

// use template literal to return a string with the sum of a and b
export const templateString = (a, b) => {
  return "The sum is equal to " + (a + b).toString();
}

