console.log("=================")
let x = 1;
function foo(y) {
return function(z) {

return x + y + z;

}
}
let f = foo(2); // f is clourse

console.log(f(5));

