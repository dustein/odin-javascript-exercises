const sumAll = function(n1, n2) {

   let soma = 0;

   for(i=1; i<=n2; i++) {
      console.log("soma: " + soma, "i: "  + i)
      soma+= i   
   }
   console.log("soma: " + soma)

   return soma;
};

sumAll(1, 4000)
// Do not edit below this line
module.exports = sumAll;
