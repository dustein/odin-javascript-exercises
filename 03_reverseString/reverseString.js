const reverseString = function(palavras) {
   
   console.log(palavras.split("").reverse().join(""))
   return palavras
            .split("")
            .reverse()
            .join("")
};

reverseString("hello")
// Do not edit below this line
module.exports = reverseString;
