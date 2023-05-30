const greetPeople = (people) => {
 /* let greeting = "Hello ";
  people.forEach((person) => {
    greeting = greeting + person;
  });
  return greeting;*/

  const greeting = "Hello ";
    return people.map(person => greeting + person);
}

module.exports = {
  greetPeople
};

/*
  Let's trace this piece of code - what is the value of result with this input

  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors)
*/
