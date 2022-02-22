const greetPeople = (people) => {
 /* let greeting = "Hello ";
 
  people.forEach((person) => {
    greeting = greeting + person;
  });

  return greeting;*/

return people.reduce((acumulador, person) => acumulador + person, "Hello ");


}

module.exports = {
  greetPeople
};

/*
  Let's trace this piece of code - what is the value of result with this input

  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors)
*/
