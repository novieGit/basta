function add(a, b) {
  let result = a + b;
  return result;
}

function multiply(a, b) {
  let result = a * b;
  return result; 
}

function isOdd(num) {
  return num % 2 !== 0; 
}

module.exports = { add, multiply, isOdd };