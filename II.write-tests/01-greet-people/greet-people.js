export const greetPeople = (people) => {
  if(people === null || Number.isNaN(people)) throw new Error('Invalid params', {cause: {statusError: 1}})
  if(people.length < 1) throw new Error('Invalid params', {cause: {statusError: 2}})
  if(!Array.isArray(people)) throw new Error('Invalid params', {cause: {statusError: 3}})
  if(!people.some((entry) => typeof entry === 'string')) throw new Error('Invalid params', {cause: {statusError: 4}})

  const greetingArray = []
  let greeting = "Hello ";

  people.forEach(function(person) {
    const type = typeof person
    if(typeof person === 'string') {
      greetingArray.push(greeting + person)
    }
  });

  return greetingArray;
}
