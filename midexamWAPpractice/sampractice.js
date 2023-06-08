// console.log(x);
// var x=2;
// console.log(x);
// let y=3;
// function foo(m){
//     var a=10;
//     let b=8;
//     const c=7;
//     console.log(a,b,c);
//     function bar(){}
// }
// foo(2);
console.log("==========");
// function a(){
//     console.log(x);

// }
// function b(m , n){
// const x=10;
// a();
// }
// const x= 20;
// b(30);

console.log("-----------------------------");
// function b(){
//     a(2);
//     function a (m){
//         console.log(x);
//         y= x+m;

//     }
//     var x=10;
// }
// const x=20;
// var y=1;
// b();
console.log("--------------*************---------------");
// let x=1;
// function foo(y){
//     return function(z){
//         return x+y+z;
//     }
// }
// let f=foo(2);
// console.log(f(60));

console.log("==========AEGUM===neweweweweewee=========");
// function foo(m){
//     console.log(arguments);
//     console.log(m);
// }
// foo('a', 'b', 'c');
console.log('+++++++++++++++++++++');
// {
//     let x=0;
//      console.log(x);
// }
// console.log(x);
console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');
let m=1;
var n=9;
function foo(flag){
    console.log(m);
    if(flag){
        var m=flag;
        m++;
    }
    console.log(m);
}
console.log(m);
foo(1);
foo(0);

//  const obj ={
//      salut:" ",
//      greet:function(){
//         this.salut="Hello"
//         console.log(this.salut); //hello
//         const setFrench=function(newSalute){
//             // console.log(this);
//             this.salut=newSalute;
            
//         };
//        setFrench("Bonjour");
//         console.log(this.salut);
//      }
// };
// obj.greet();

console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&================");
// const user={
//     fname: 'josh',
//     greet: function(){
//         function setName(fname){
//             this.fname=fname;
//         }
//         setName.bind(this,'edward')();
//     }

// };
// user.greet();
// console.log(user.fname);
// let user = {
//     firstName: "John",
//     sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//     }
//     };
//     user.sayHi(); //works
//      setTimeout(()=>user.sayHi, 2000); //problem! - this refers to window object
//      setTimeout(user.sayHi.bind(user), 2000); //works
//      setTimeout(() => user.sayHi.call(user), 2000); //works
//      setTimeout(() => user.sayHi.apply(user), 2000)