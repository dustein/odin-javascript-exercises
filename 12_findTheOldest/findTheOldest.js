const findTheOldest = function(people) {

  let oldest = 0
  let personAge = 0
  let oldestPerson = ""

  for(let i=0; i<people.length; i++){
    // console.log(people[i])
    personAge = people[i].yearOfDeath - people[i].yearOfBirth
    
    
    if(Number.isNaN(personAge)) {
      personAge = new Date().getFullYear() - people[i].yearOfBirth
      console.log(new Date().getFullYear())
    }
    console.log("idade: "  + personAge)

    if (oldest === 0) {
      oldest = personAge
      oldestPerson = people[i]
      // console.log(oldest)
    } else if (personAge > oldest) {
      oldest = personAge
      oldestPerson = people[i]
      // console.log("novo velho: " + oldest)
      // console.log(oldestPerson)
    }

  }
  return oldestPerson
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

console.log(findTheOldest(people).name)
// Do not edit below this line
module.exports = findTheOldest;
