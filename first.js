// console.log("Hello world");
// function sum4(num1, num2, num3, num4 = 1) {
//   return num1 + num2 + num3 + num4;
// }

// console.log(sum4(1, 2, 3));
// console.log(1 > 2 ? true : false);
// var name = "Joon";
// var user = {
//   Name: "Malav",
//   Age: 21,
//   Specialization: "Mern",
// };

// printName(user);
// console.log("Hello");
// function printName(name) {
//   console.log(name);
// }

// var example = function (name) {
//   console.log("Hello ", name);
// };

// example("Malav");

// Immidiately Invocable Function Expression (IIFE)
// var gc = 0;

// (function IIFE(count) {
//   gc = count;
//   console.log(gc);
// })(100);

// console.log(gc);

//constructor function - used to create class like structure

// function User(fName, lName) {
//   this.fName = fName;
//   this.lName = lName;
//   this.getUserName = function () {
//     return this.fName + " " + this.lName;
//   };
// }

// var userObj = new User("Malav", "Doshi");
// console.log(userObj.getUserName());

//Prototyping for inheritance in java
//Inheritance: constructor function in es5 and then classes in es6. prototype is the only way
//Encapsulation: data hiding can be done through closures, with help of access modifiers
//Polymorphism: Overriding and overloading(not in JS)
//Abstraction: not possible in js

//Encapsulaiton

//closure: A phenomenon when we have two nested functions and the parent function returns child function.
//Child function only return some required properties and others are kept private

// function Parent(name, age, cell) {
//   var Name = name; //public
//   var Age = age; //pubic
//   var cell = cell; //public
//   var Balance = "$1000"; //private
//   var AccType = "Savings"; //private
//   var pass = "abcdefgh"; //private

//   //here we decide what to return out
//   return function Child(accNum, isAdmin) {
//     //If Key: Val is the same name then just write the val
//     return {
//       Name,
//       Age,
//       cell,
//       accNum,
//     };
//   };
// }

// var parentObj = Parent("Malav", 21, 1234567890);
// console.log(parentObj(12));

// function Sessions(isEnrolled) {
//   var MongoDB = "MongoDB";
//   var Express = "Express";
//   var React = "React";
//   var Node = "Node";
//   var SQL = "SQL";
//   var Java = "Java";
//   function Topics(sessionName) {
//     if (sessionName === undefined || isEnrolled === false) {
//       return "please enroll";
//     } else if (sessionName === "MERNStack") {
//       return {
//         MongoDB,
//         Express,
//         React,
//         Node,
//       };
//     }
//   }

//   return Topics;
// }

// var obj = Sessions(true);
// console.log(obj("MERNStack"));
// console.log(obj());

// function calcArea() {
//   console.log("hello");
// }

// calcArea(1, 2);

// function print(name, age, session) {
//   console.log(`${name}, ${age}, ${session}`);
// }
// //username, age, session name
// function geStudent(printFunc, userName, age, session) {
//   printFunc(userName, age, session);
// }

// function getEmployee(printFunc, userNAme, age, session) {
//   printFunc(userNAme, age, session);
// }

// geStudent(print, "malav", 21, "MERN");
// getEmployee(print, "md", 25, "MERN");
