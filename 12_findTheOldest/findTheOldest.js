const findTheOldest = function(people) {
  // let oldest = people[0].name;
  // let oldYear = people[0].yearOfBirth;
  // for (let i=0; i<people.length; i++) {
  //   console.log(people[i].yearOfBirth)
  //   if( people[i].yearOfBirth < oldYear) {
  //     oldYear = people[i].yearOfBirth
  //     console.log(oldYear = people[i].yearOfBirth)
  //     oldest = people[i].name
  //     console.log(oldest = people[i].name)
  //   }
  // }
  // return oldest
  for(let i=0; i<people.length; i++){
    console.log(people[i])
    console.log(people[i].yearOfDeath - people[i].yearOfBirth)
  }
  return "FIM"
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
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
