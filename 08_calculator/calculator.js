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
    acumulador *= arr[i]
  }
  return acumulador;
};

const power = function(base, expoente) {

  return base ** expoente
};

const factorial = function(num) {

  if(num === 0) {
    return 1
  }
  return factorial(num - 1) * num


	// fatorial 0 = 1
  // fatorial 1 = 1*1
  // fatorial 2 = 2*1
  // fatorial 3 = 3*2*1
  // fatorial 4 = 4*3*2*1
};

// console.log(add(0, 0))
// console.log(subtract(10, 4))
// console.log(sum([]))
// console.log(multiply([2,4]))
// console.log(power(4,3))
console.log(factorial(10))
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
