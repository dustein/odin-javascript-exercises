const caesar = function(original, change) {
   let changedLetters = []

   for(let i = 0 ; i < original.length; i++) {
      changedLetters.push(original.charCodeAt(i))
      console.log(changedLetters)
   }
   
   // let originalCaractere = original.charCodeAt(0);
   // return String.fromCharCode(originalCaractere + change)
};

console.log(caesar("Aaa", 1))
// Do not edit below this line
module.exports = caesar;
