const palindromes = function (info) {
  let reverseArray = []
  let prepArray = info
                      .toLowerCase()
                      .split("")
                      .reverse();
  // let fase1 = info.toLowerCase();
  // console.log(fase1)
  // let fase2 = fase1.split("");
  // console.log(fase2)
  // let fase3 = fase2.reverse();
  // console.log(fase3)
  // console.log(fase3.length)
  for(i=0; i<prepArray.length; i++) {
    reverseArray.push(prepArray[i])
  }
  let teste = reverseArray.join("")
  console.log(reverseArray)
  console.log(teste)
  if(teste === info) {
    return "OK"
  }
  return "---- rodou -----"
};

console.log(palindromes("racecar"))
// Do not edit below this line
module.exports = palindromes;
