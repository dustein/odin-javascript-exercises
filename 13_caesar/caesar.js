const caesar = function(original, change) {
   let changedLetters = []
   let regEx = /[aA-zZ]/g
   let codigo = 0;
   for(let i = 0 ; i < original.length; i++) {
      console.log(`rodada ${i}`)
      if(original[i].match(regEx)) {
         console.log(`Letra original ${original[i]}`)
         //para caracteres de A-Z (65 a 90)
         if(original.charCodeAt(i) > 64 && original.charCodeAt(i) < 91) {
            console.log("caractere original Maiusculo" + original.charCodeAt(i))
            //se a modificacao do caractere ultrapassar o ultimo 90...
            if(original.charCodeAt(i) + change > 90 ) {
               codigo = 64 + (change - (90 - original.charCodeAt(i)))
               console.log("caractere Maiusculo alterado" + codigo)
               changedLetters.push(String.fromCharCode(codigo))      
            }
         }
         //para caracteres de a-z (97-122)
         if(original.charCodeAt(i) > 96 && original.charCodeAt(i) < 123) {
            console.log("caractere original minusculo" + original.charCodeAt(i))
            if(original.charCodeAt(i) + change > 90 ) {
               codigo = 96 + (change - (122 - original.charCodeAt(i)))
               console.log("caractere minusculo alterado" + codigo)
               changedLetters.push(String.fromCharCode(codigo))      
            }
         }
         // console.log("ok")
         // changedLetters.push(String.fromCharCode(original.charCodeAt(i)+change));

      } else if (!original[i].match(regEx)) {
         changedLetters.push(String.fromCharCode(original.charCodeAt(i)))
      }
      console.log(changedLetters)
   }
   return changedLetters.join("");
};

console.log(caesar("Hello, World!", 5))
// Do not edit below this line
module.exports = caesar;
