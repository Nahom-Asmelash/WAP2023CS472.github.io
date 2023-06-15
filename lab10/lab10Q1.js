
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
Array.prototype.even = function() {
    return this.filter((number) => number % 2 === 0);
  };
  
  Array.prototype.odd = function() {
    return this.filter((number) => number % 2 !== 0);
  };
  
 
  console.log(numbers.even()); // Output: [2, 4, 6, 8]
  console.log(numbers.odd()); // Output: [1, 3, 5, 7]
  
  