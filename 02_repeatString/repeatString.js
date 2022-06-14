const repeatString = function(palavra, vezes) {
   let resp = [];
   
   for (i=1; i <= vezes; i++) {
      resp.push(palavra);
   }
   console.log(resp.join(""))
   return resp.join("")
};

repeatString('hey', 10);
// Do not edit below this line
module.exports = repeatString;
