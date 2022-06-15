const sumAll = function(n1, n2) {

   let soma = 0;
   let a = n1;
   let b = n2;

   if (n2 < n1) {
      a = n2
      b = n1
   }
   
   for(i=1; i<=b; i++) {
      console.log("soma: " + soma, "i: "  + i)
      soma+= i   
   }
   console.log("soma: " + soma)

   return soma;
};

sumAll(123, 1)
// Do not edit below this line
module.exports = sumAll;
