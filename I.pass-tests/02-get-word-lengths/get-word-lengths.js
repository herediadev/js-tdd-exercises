export const wordLengths = (someWords) => {
  if(!Array.isArray(someWords)){
    throw new Error ("Invalid format")
  }
  return someWords.map(element => 
    typeof element === 'string' ? element.length : 0
  );
};

