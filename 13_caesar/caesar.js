const caesar = function(original, change) {
   let changedLetters = []
   let regEx = /[aA-zZ]/g
   let originalCode = 0
   let changeWrap = 0;
   for(let i = 0 ; i < original.length; i++) {
      originalCode = original.charCodeAt(i)
      // console.log(`rodada ${i}`)
      // console.log(`originalCode = ${String.fromCharCode(originalCode)}`)

      if(original[i].match(regEx)) {

         if(originalCode >= 65 && originalCode <= 90) {
            if(originalCode + change > 90) {
               // console.log("aqui tenm que ter wrap")
               changeWrap = 64 + (change - (90 - originalCode))
               // console.log(`Novo sera ${String.fromCharCode(changeWrap)}`)
               changedLetters.push(String.fromCharCode(changeWrap))
            } else if (originalCode + change < 65) {
               changedLetters.push(String.fromCharCode(originalCode + change))
               // console.log(`Virou ${String.fromCharCode(originalCode + change)}`)
            } else if (originalCode + change <= 90) {
               changedLetters.push(String.fromCharCode(originalCode + change))
               // console.log(`Virou ${String.fromCharCode(originalCode + change)}`)
         }

         if(originalCode >= 97 && originalCode <= 122) {
            if(originalCode + change > 122) {
               // console.log("aqui tambem")
               changeWrap = 96 + (change - (122 - originalCode))
               // console.log(`Novo sera ${String.fromCharCode(changeWrap)}`)
               changedLetters.push(String.fromCharCode(changeWrap))
            } else if (originalCode + change < 97) {
               changedLetters.push(String.fromCharCode(originalCode + change))
               // console.log(`Virou ${String.fromCharCode(originalCode + change)}`)
            } else if (originalCode + change <= 122) {
               changedLetters.push(String.fromCharCode(originalCode + change))
               // console.log(`Virou ${String.fromCharCode(originalCode + change)}`)

         }

      //se o caractere não for aA-zZ...
      } else if (!original[i].match(regEx)) {
         changedLetters.push(String.fromCharCode(originalCode))
      }
   }

   return changedLetters.join("");
};

console.log(caesar("A", -1))
// Do not edit below this line
module.exports = caesar;
