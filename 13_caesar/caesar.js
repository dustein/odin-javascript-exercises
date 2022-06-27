const caesar = function(original, change) {

   let changedLetters = "";
   let regex = /[aA-zZ]/g;


   for(i=0; i<original.length; i++) {
      let ascii = original[i].charCodeAt();
      console.log(`Letra da vez: ${original[i]} codigo ${ascii}`)
      //verificar se e letra
      // if(!original[i].match(regex)) {
      //    console.log(original[i])
      // }

      if(ascii >= 65 && ascii <= 90) {
         console.log("MAIUSCULA")
         changedLetters += String.fromCharCode( (ascii - "A".charCodeAt(0) + change) % 26 + "A".charCodeAt(0));
      } else if(ascii >= 97 && ascii <= 122) {
         console.log("minuscula")
         changedLetters += String.fromCharCode( (ascii - "a".charCodeAt(0) + change) % 26 + "a".charCodeAt(0));
      } else {
         changedLetters += original[i]
      }


   }


   // return changedLetters.join("");
   return changedLetters;
};

console.log(caesar("Hello, World!", 5))
   // const maiusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
   // const minusculas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Do not edit below this line
module.exports = caesar;
