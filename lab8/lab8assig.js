"use strict";

// ------------------Object Literal------------------------

var student = {
  firstName: "Nahom",
  lastName: "Asmelash",
  grades: [2, 3],

  inputNewGrade: function (newgrades) {
    this.grades.push(newgrades);
  },

  computeAverageGrade: function () {
    const calcTotal = this.grades.reduce((sum, g) => sum + g, 0);
    const calcAvg = calcTotal / this.grades.length;
    return calcAvg;
  },
};

let studentArray = [Object.create(student), Object.create(student)];

studentArray[0].inputNewGrade(25);
studentArray[0].computeAverageGrade();
studentArray[1].inputNewGrade(45);
studentArray[1].computeAverageGrade();

const totalGrades = studentArray.reduce(
  (acc, cur) => acc.concat(cur.grades),
  []
);

const averageGrade =
  totalGrades.reduce((acc, cur) => acc + cur, 0) / totalGrades.length;

console.log(totalGrades);
console.log(averageGrade);



// ------------------ Question 2 Using Constructor------------------------

function Student(firstName,middleNamee,grades)
{
    this.firstName=firstName;
    this.middleNamee=middleNamee;
    this.grades=grades;

    this.inputNewGrade=function (newgrades) {
    this.grades.push(newgrades);
  };

  this.computeAverageGrade=function () {
    const calcTotal = this.grades.reduce((sum, g) => sum + g, 0);
    const calcAvg = calcTotal / this.grades.length;
    return calcAvg;
  };
}


let $studentArray = [Object.create(student), Object.create(student)];

studentArray[0].inputNewGrade(25);
studentArray[0].computeAverageGrade();
studentArray[1].inputNewGrade(45);
studentArray[1].computeAverageGrade();

const $totalGrades = $studentArray.reduce(
  (acc, cur) => acc.concat(cur.grades),
  []
);

const $averageGrade =
  totalGrades.reduce((acc, cur) => acc + cur, 0) / totalGrades.length;

console.log($totalGrades);
console.log($averageGrade);




// ------------------ Question 3 Using Constructor------------------------


Array.prototype.mysort= function() 
{
    return this.sort((a,b)=>a-b);
}

let numbs= [4,1,2,5,9,7]
console.log(numbs.mysort());

//---------------------Question4---------------------
// Object literal implementation
// const LinkedList = {
//   head: null,
//   add(value) {
//     const newNode = {
//       value: value,
//       next: null,
//     };
//     if (!this.head) {
//       this.head = newNode;
//     } else {
//       let current = this.head;
//       while (current.next) {
//         current = current.next;
//       }
//       current.next = newNode;
//     }
//   },
//   remove(value) {
//     if (!this.head) {
//       return;
//     }
//     if (this.head.value === value) {
//       this.head = this.head.next;
//       return;
//     }
//     let current = this.head;
//     let previous = null;
//     while (current && current.value !== value) {
//       previous = current;
//       current = current.next;
//     }
//     if (current) {
//       previous.next = current.next;
//     }
//   },
//   print() {
//     let current = this.head;
//     const values = [];
//     while (current) {
//       values.push(current.value);
//       current = current.next;
//     }
//     console.log(`LinkedList{${values.join(",")}}`);
//   },
// };

// // Constructor function implementation
// function LinkedList() {
//   this.head = null;
// }

// LinkedList.prototype.add = function (value) {
//   const newNode = {
//     value: value,
//     next: null,
//   };
//   if (!this.head) {
//     this.head = newNode;
//   } else {
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }
// };

// LinkedList.prototype.remove = function (value) {
//   if (!this.head) {
//     return;
//   }
//   if (this.head.value === value) {
//     this.head = this.head.next;
//     return;
//   }
//   let current = this.head;
//   let previous = null;
//   while (current && current.value !== value) {
//     previous = current;
//     current = current.next;
//   }
//   if (current) {
//     previous.next = current.next;
//   }
// };

// LinkedList.prototype.print = function () {
//   let current = this.head;
//   const values = [];
//   while (current) {
//     values.push(current.value);
//     current = current.next;
//   }
//   console.log(`LinkedList{${values.join(",")}}`);
// };

// // Usage
// let linkedlist = new LinkedList();
// linkedlist.add(1);
// linkedlist.add(2);
// linkedlist.add(3);
// linkedlist.print(); // Expected Result: LinkedList{1,2,3}
// linkedlist.remove(2);
// linkedlist.print(); // Expected Result: LinkedList{1,3}

