// "use strict";

// // -----------------------------------------------Question No.1------------------------------------------------

// //Fix using Wrapper

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: "John",

//   loginok: () => {
//     alert(`${user.name} logged in`);
//   },

//   loginFail: () => {
//     alert(`${user.name} failed to log in`);
//   },
// };

// askPassword(user.loginok, user.loginFail);

// //Fix using bind
// ("use strict");

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user1 = {
//   name: "John",

//   loginok() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };
// askPassword(user1.loginok.bind(user1), user.loginFail.bind(user1));

// //Fix using Call

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok.call(user2);
//   else fail.call(user2);
// }

// let user2= {
//   name: "John",

//   loginok() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };

// askPassword(user2.loginok, user2.loginFail);

// //Fix using apply

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok.apply(user3);
//   else fail.apply(user3);
// }

// let user3 = {
//   name: "John",

//   loginok() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };

// askPassword(user3.loginok, user3.loginFail);


"use strict";
const readlineSync = require('readline-sync');

// -----------------------------------------------Question No.1------------------------------------------------

// Fix using Wrapper
function askPassword(ok, fail) {
  let password = readlineSync.question("Password? ");
  if (password === "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  loginok: () => {
    console.log(`${user.name} logged in`);
  },

  loginFail: () => {
    console.log(`${user.name} failed to log in`);
  },
};

askPassword(user.loginok, user.loginFail);

// Fix using bind
"use strict";

function askPassword(ok, fail) {
  let password = readlineSync.question("Password? ");
  if (password === "rockstar") ok();
  else fail();
}

let user1 = {
  name: "John",

  loginok() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
};
askPassword(user1.loginok.bind(user1), user1.loginFail.bind(user1));

// Fix using Call

function askPassword(ok, fail) {
  let password = readlineSync.question("Password? ");
  if (password === "rockstar") ok.call(user2);
  else fail.call(user2);
}

let user2 = {
  name: "John",

  loginok() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
};

askPassword(user2.loginok, user2.loginFail);

// Fix using apply

function askPassword(ok, fail) {
  let password = readlineSync.question("Password? ");
  if (password === "rockstar") ok.apply(user3);
  else fail.apply(user3);
}

let user3 = {
  name: "John",

  loginok() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
};

askPassword(user3.loginok, user3.loginFail);
