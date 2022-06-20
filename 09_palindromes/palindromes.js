const palindromes = function (info) {
  let reverseArray = []
  let prepArray = info
                      .toLowerCase()
                      .split("")
                      .reverse();

  for(i=0; i<prepArray.length; i++) {
    reverseArray.push(prepArray[i])
  }
  let finalArray = reverseArray.join("")

  if(finalArray === info) {
    console.log(finalArray)
    return true;
  }
  console.log(finalArray)
  return false;
};

console.log(palindromes("racecar"))
// Do not edit below this line
module.exports = palindromes;
