const ftoc = function(temp) {
  let celsius = Number((((temp - 32) * 5)/9).toFixed(1));
  return celsius;
};

const ctof = function(temp) {
  let fahrenheit = Number(((temp * 9/5) + 32).toFixed(1));
  return fahrenheit;
};
console.log(ftoc(73.2))
console.log(ctof(73.2))
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
