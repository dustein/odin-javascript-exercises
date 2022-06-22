const fibonacci = function(position) {
   let sequence = [0, 1];
   let posNum = Number(position);

   if(posNum < 0) {
      return "OOPS"
   };

   for(i=2; i<posNum+1; i++) {
      sequence[i] = sequence[i-2] + sequence[i-1];
      console.log(sequence)
   }

   return sequence[posNum]
};

console.log(fibonacci("8"))
// Do not edit below this line
module.exports = fibonacci;
