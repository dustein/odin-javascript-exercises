const caesar = function(original, change) {

   let changedLetters = []
   let regex = /[aA-zZ]/g;


   for(i=0; i<original.length; i++) {
      let ascii = original[i].charCodeAt();
      console.log(`Letra da vez: ${original[i]} codigo ${ascii}`)
      //verificar se e letra
      if(!original[i].match(regex)) {
         console.log(original[i])
      }

      if(ascii >= 65 && ascii <= 90) {
         console.log("MAIUSCULA")

      }

      if(ascii >= 97 && ascii <= 122) {
         console.log("minuscula")
         
      }


   }


   return changedLetters.join("");
};

console.log(caesar("Hello, World!", 1))
   // const maiusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
   // const minusculas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Do not edit below this line
module.exports = caesar;
