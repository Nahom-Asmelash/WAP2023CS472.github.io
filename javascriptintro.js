const numbers = [15, 25, 30, 10, 40];


const strings = ['apple', 'banana', 'avocado', 'orange'];



// 1. Function Declaration - sum:
function sum(arr) {
    return arr.filter((num) => num > 20)
    .reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(numbers)); // Output: 95

//2. Function Expression - getNewArray:
const getNewArray = function (arr) {
    return arr.filter((str) => str.length >= 5 && str.includes('a'));
};

console.log(getNewArray(strings)); // Output: ['banana', 'avocado', 'orange']

function askPassword(ok, fail){
   
    const password = "rockstar";
    if(password === "rockstar"){
        ok();
    } else {
        fail();
    }
}

const user = {
    name: 'John',
    loginOk: function(){
        console.log(`${this.name} logs in!`);
    },
    loginFail: function(){
        console.log(`${this.name} Failed..........`);
    }
}

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
askPassword(() => user.loginOk.call(user), () =>user.loginFail.call(user));
askPassword(() => user.loginOk.apply(user), () =>user.loginFail.apply(user));
askPassword(() => user.loginOk(user), () =>user.loginFail(user));
// 1. let res1 = user.loginOk.call(user);
// 2. let res2 = user.loginFail.callser);
// 3. askPassword(res1, res2);
function f(m, n, l){
    if(l){
        m();
    } else {
        n();
    }
}

// f(()=> console.log('Hi'),
//     function(){
//         console.log('Hello');
//     }, ()=>{});

//     let group = {
//         title: "Our Group",
//         students: ["John", "Pete", "Alice"],
//         showList: function () {
        
//             function f(student){
//                 console.log(this.title + ": " + student);
//             }
    
//             // this.students.forEach( stu => f.apply(this, [stu]));   
//             this.students.forEach( stu => f.call(this, stu));
//         }
//     };
    
    // group.showList();
    
    //apply + wrapper
    
    
    //bind
    // let group = {
    //     title: "Our Group",
    //     students: ["John", "Pete", "Alice"],
    //     showList: function () {
        
    //         this.students.forEach( function f(student){
    //             console.log(this.title + ": " + student);
    //         }.bind(this));
       
    //     }
    // };
    
    
    // arrow function
    // let group = {
    //     title: "Our Group",
    //     students: ["John", "Pete", "Alice"],
    //     showList: function () {
            
    //         this.students.forEach((student) =>{
    //             console.log(this.title + ": " + student);
    //         });
       
    //     }
    // };
    
    // self pattern 
    
    let group = {
        title: "Our Group",
        students: ["John", "Pete", "Alice"],
        showList: function () {
            let self = this;
            this.students.forEach(function (student) {
                console.log(self.title + ": " + student);
            });
       
        }
    };


    // function f() {

    // }
    
    // function g() {
    //     return f;
    // }
    
    
    // let x = 1;
    // function foo(y) {
    //     return function (z) {
    //         console.log(x + y + z);
            
    //     }
    // }
    
    // let res = foo(10)(20);
    
    
    const obj = {};
let name = 'Quicy';
let average = 90;

 //obj.name = average;
obj[name] = average;

console.log(obj);