const ftoc = function(temp) {
  let celsius = Math.floor(((temp - 32) * 5)/9)
  return celsius;
};

const ctof = function(temp) {
  let fahrenheit = (Math.floor((temp * 9/5) + 32) * 100) /100;
  return fahrenheit;
};
console.log(ftoc(73.2))
console.log(ctof(73.2))
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
