import {removeVowels} from "../02-remove-vowels/remove-vowels";

export const removeVowelsForWords = (words) => {
  if(words === null || Number.isNaN(words)) throw new Error('Invalid params', {cause: {statusError: 1}})
  if(!Array.isArray(words)) throw new Error('Invalid params', {cause: {statusError: 2}})
  
  let result = []
  result = words.map(function(word) {
    if(typeof word === 'string'){
      return removeVowels(word)
    }
  });

  const validStrings = result.filter((str) => {
    return typeof str === "string" && str.length > 0
  });
  
  return validStrings;
}

