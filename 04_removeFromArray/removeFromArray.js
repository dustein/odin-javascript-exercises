const removeFromArray = function(array, ...toremove) {

   let removeMany = toremove.length
   console.log("toremoveLength : " + toremove.length)
   
   //remove multiples values
   for (i=0; i<removeMany; i++) {
      let removeIndex = array.indexOf(toremove[i]);

      //ignores non presents values but work if tehe is on
      for(i-0; i<removeMany; i++) {
         //ignore non present values
         if(removeIndex === -1) {
            console.log("nada encontrado... " + array)
            return array
         }
         console.log("removeIndex : " + removeIndex)
         array.splice(removeIndex, 1)
         console.log("array : " + array)
      }
   }

   console.log(array)
   return array
};

removeFromArray([1,2,3,4], 7, 2)
// Do not edit below this line
module.exports = removeFromArray;
