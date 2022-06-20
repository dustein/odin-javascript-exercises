const palindromes = function (info) {

  let fase1 = info.toLowerCase();
  console.log(fase1)
  let fase2 = fase1.split("");
  console.log(fase2)
  let fase3 = fase2.reverse();
  console.log(fase3)
  console.log(fase3.lenght)
  for(i=0; i<6; i++) {
    console.log(fase3[i])
  }

  return "---- rodou -----"
};

console.log(palindromes("TesSte"))
// Do not edit below this line
module.exports = palindromes;
