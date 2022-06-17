const ftoc = function(temp) {
  let celsius = Math.floor(((temp - 32) * 5)/9)
  return celsius;
};

const ctof = function(temp) {
  let fahrenheit = Math.floor((temp * 9/5) + 32)
  return fahrenheit;
};
console.log(ftoc(32))
console.log(ctof(26))
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
