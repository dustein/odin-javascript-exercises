const findTheOldest = function(people) {
  let oldest = "";
  let oldYear = 0;
  for (let i=0; i<people.length; i++) {
    // console.log(people[i].yearOfBirth)
    if( i === 0) {
      oldYear = people[i].yearOfBirth
      console.log(oldYear = people[i].yearOfBirth)
      oldest = people[i].name
      console.log(oldest = people[i].name)

    } 
    
    if( people[i].yearOfBirth < oldYear) {
      oldYear = people[i].yearOfBirth
      console.log(oldYear = people[i].yearOfBirth)
      oldest = people[i].name
      console.log(oldest = people[i].name)
    }
    return oldest
}
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


console.log(findTheOldest(people))
// Do not edit below this line
module.exports = findTheOldest;
