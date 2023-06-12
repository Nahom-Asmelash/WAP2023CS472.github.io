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
// let m=1;
// var n=9;
// function foo(flag){
//     console.log(m);
//     if(flag){
//         var m=flag;
//         m++;
//     }
//     console.log(m);
// }
// console.log(m);
// foo(1);
// foo(0);

//  const obj ={
//      salut:" ",
//      greet:function(){
//         const self=this;
//         self.salut="Hello"
//         console.log(this.salut); //hello
//         const setFrench=function(newSalute){
//             // console.log(this);
//             self.salut=newSalute;
            
//         };
//        setFrench("Bonjour");
//         console.log(this.salut);
//      }
// };
// obj.greet();

console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&================");
const user={
    fname: 'josh',
    greet: function(){
        const self=this;
        function setName(fname){
            self.fname=fname;
        }
        setName('edward');
    }

};
user.greet();
console.log(user.fname);

//-------------------FIXING--USING-----WRAPPER----------------------------------------
//--------------------------USING ARROW FUNCTION------------------------
const user1={
    fname: 'josh',
    greet: function(){
        // const self=this;
        // function setName(fname){
        //     this.fname=fname;
        // }
        setName=fname=>this.fname=fname;
        setName('edward');
    }

};
user1.greet();
console.log(user1.fname);

//=============================================================

const user3={
    fname: 'josh',
    greet: function(){
        // const self=this;
        function setName(fname){
            this.fname=fname;
        }
        setName.bind(this,'edward')();
    }

};
user3.greet();
console.log(user3.fname);
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

// const animal = {
//     walk: function(){
//     if(!this.isSleeping){
//     console.log('Animal Walk!!!');
//     }
//     },
//     sleep: function(){
//     this.isSleeping = true;
//     }
//     }
//     let rabbit = Object.create(animal);
   
//     rabbit.sleep();
//     rabbit.walk();
//     // animal.walk();
//     console.log(rabbit)

    // const person={
    
    //     name:'edward',
    //     prinName: function(greeting){
    //         console.log('${greeting} ${this.name}');

    //     }
    // };
    // function foo(){
    //     const printNameFromPerson= person.prinName;
    //     printNameFromPerson.call(person, 'edward');
    // }
    // foo();
    const person = {
        name: 'edward',
        printName: function(greeting) {
            console.log(`${greeting} ${this.name}`);
        }
    };
    
    function foo() {
        const printNameFromPerson = person.printName;
        printNameFromPerson.call(person, "HELLO"); // Using call to set the context
       // printNameFromPerson.apply(person, ['Hello']); // Using apply to set the context
    
    }
    
    foo(); // Output: Hello edward
    
console.log('=================================================')
// let x=1;
// const g= b(2);
// function b(){
//     let x=3;
//      var y =4;
//      const a= function(x){
//         x=5;
//         y+=x;
//         console.log(y);
//      }
//       return a;

// }
// var y=6;
// g(7);


console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
 let x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
console.log("x1: "+ x);
console.log("a2: "+ a);
var f = function() {
b = a;
console.log("b3: " + b);
b = c;
var a = 3;
} 
f();
console.log("b4: " + b);
  x = 6;
}
 c(8, 9, 7);
console.log("b5: " + b);
console.log("x6: "+ x);