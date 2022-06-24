const caesar = function(original, change) {
   let changedLetters = []

   for(let i = 0 ; i < original.length; i++) {
      changedLetters.push(String.fromCharCode(original.charCodeAt(i)+change))
      console.log(changedLetters)
   }
   return changedLetters.join("");
};

console.log(caesar("Aaa", 1))
// Do not edit below this line
module.exports = caesar;
