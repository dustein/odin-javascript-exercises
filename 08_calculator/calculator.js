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

const multiply = function(arr) {
	let acumulador = 1;

  for(i=0; i<arr.length; i++) {
    console.log(arr)
    console.log(arr.length)
    console.log(arr[i])
    acumulador *= arr[i]
  }
  return acumulador;
};

const power = function() {
	
};

const factorial = function() {
	
};

// console.log(add(0, 0))
// console.log(subtract(10, 4))
// console.log(sum([]))
console.log(multiply([2,4]))
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
