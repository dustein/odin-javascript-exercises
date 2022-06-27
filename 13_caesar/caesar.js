const caesar = function(original, change) {
   const maiusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
   const minusculas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
   
   let changedLetters = []

   for(i=0; i<original.length; i++) {
      console.log(original[i])
      //verificar se e maiuscula ou minuscula
      if(original[i] === original[i].toUpperCase()) {
         console.log("MAIUSCULA")
         changedLetters.push(maiusculas[i+1])
      } else {
         console.log("minuscula")
         changedLetters.push(original[i])
      }



   }


   return changedLetters.join("");
};

console.log(caesar("AbAbAb", 1))
// Do not edit below this line
module.exports = caesar;
