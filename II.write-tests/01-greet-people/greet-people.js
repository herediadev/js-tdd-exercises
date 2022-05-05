const greetPeople = (people) => {
  if (!Array.isArray(people)) return "Invalid input"; 
  if (people.length === 0) return "Invalid input";

  const validWords = people.filter((word) => typeof word === "string");
  if (validWords.length === 0) return "Invalid input";

  return validWords.map((word) => `Hello ${word}`);
};

module.exports = { greetPeople };
