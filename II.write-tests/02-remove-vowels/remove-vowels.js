export const removeVowels = (word) => {
  if(word === null || Number.isNaN(word)) throw new Error('Invalid params', {cause: {statusError: 1}})
  if(typeof word === 'object' || word === true || word === false) throw new Error('Invalid params', {cause: {statusError: 2}})

  if(typeof word!== 'string'){
    return ''
  }
  const wordTransformed = word.replace(/[aeiou]/gi, '')

  return wordTransformed;
}

/*
  Let's trace this piece of code - what is the value of result with this input

  var result = removeVowels('samuel');

  what is the value of result?
*/
