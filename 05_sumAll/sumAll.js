const sumAll = function(n1, n2) {

   let soma = 0;
   let a = n1;
   let b = n2;
   console.log(typeof(a) + typeof(b))
   if(typeof(a) != "number" || typeof(b) != "number") {
      console.log('ERRO nao e int')
      return 'ERROR'
   }
   if (a < 0 || b < 0) {
      console.log("ERROR")
      return 'ERROR'
   }
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

sumAll(10, "9")
// Do not edit below this line
module.exports = sumAll;
