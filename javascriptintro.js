const numbers = [15, 25, 30, 10, 40];


const strings = ['apple', 'banana', 'avocado', 'orange'];



// 1. Function Declaration - sum:
function sum(arr) {
    return arr.filter((num) => num > 20).reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(numbers)); // Output: 95

//2. Function Expression - getNewArray:
const getNewArray = function (arr) {
    return arr.filter((str) => str.length >= 5 && str.includes('a'));
};

console.log(getNewArray(strings)); // Output: ['banana', 'avocado', 'orange']