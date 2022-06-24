const caesar = function(original, change) {
   let changedLetters = []
   let regEx = /[aA-zZ]/g
   let codigo = 0;
   for(let i = 0 ; i < original.length; i++) {

      if(original[i].match(regEx)) {
         // console.log(original[i])
         
         if(original.charCodeAt(i) > 64 && original.charCodeAt(i) < 91) {
            if(original.charCodeAt(i) + change > 90 ) {
               codigo = 64 + (change - (90 - original.charCodeAt(i)))
               console.log(codigo)
               changedLetters.push(String.fromCharCode(original.charCodeAt(codigo)))      
         }

         }




         changedLetters.push(String.fromCharCode(original.charCodeAt(i)+change))
      } else if (!original[i].match(regEx)) {
         changedLetters.push(String.fromCharCode(original.charCodeAt(i)))
      }
      // console.log(changedLetters)
   }
   return changedLetters.join("");
};

console.log(caesar("Hello, World!", 5))
// Do not edit below this line
module.exports = caesar;
