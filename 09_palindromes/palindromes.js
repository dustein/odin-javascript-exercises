const palindromes = function (info) {
  let reverseArray = []
  let regEx = /[aA-zZ]/g
  let preRegex = info.toLowerCase();
  let posRegex = preRegex.match(regEx).join("")
  console.log(posRegex)
  let prepArray = posRegex.split("").reverse();
  console.log(prepArray)

  for(i=0; i<prepArray.length; i++) {
      
      reverseArray.push(prepArray[i])
    
  }
  let finalArray = reverseArray.join("")

  if(finalArray === posRegex) {
    return true;
  }
  return false;
};

console.log(palindromes("ZZZZ car, a man, a maracaz."))
// Do not edit below this line
module.exports = palindromes;
