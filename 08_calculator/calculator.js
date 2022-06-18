const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
	let acumulador = 0;
  
  for(i=0; i<arr.length; i++) {
    acumulador += arr[i]
  }
  return acumulador;
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// console.log(add(0, 0))
// console.log(subtract(10, 4))
console.log(sum([]))
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
