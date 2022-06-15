const removeFromArray = function(array, ...toremove) {

   console.log("array original : " + array)
   let removeMany = toremove.length
   // console.log("toremoveLength : " + toremove.length)
   let removeArray = [...toremove]
   console.log("removeArray : " + removeArray)
   //para cada toremove
   for(i=0; i<removeArray.length; i++) {
      console.log(removeArray.length)
      console.log("removeArray[i] : " + removeArray[i])
      for (j=0; j<removeMany; j++) {
         let removeIndex = array.indexOf(removeArray[i]);
         console.log("removeIndex : " + removeIndex)
         if(removeIndex != -1) {
            array.splice(removeIndex, 1)
            console.log("array : " + array)
         }
      }
   }



   // //remove multiples values
   // for (i=0; i<removeMany; i++) {
   //    let removeIndex = array.indexOf(toremove[i]);
   //    //ignore non present values
   //    // if(removeIndex === -1) {
   //    //    removeArray.shift();
   //    //    console.log("removeArray shifted : " + removeArray)
   //    // }
      
   //          console.log("removeIndex : " + removeIndex)
   //          array.splice(removeIndex, 1)
   //          console.log("array : " + array)
   // }

   console.log(array)
   return array
};

removeFromArray([1,2,3,4], 1, 2, 3, 4)
// Do not edit below this line
module.exports = removeFromArray;
