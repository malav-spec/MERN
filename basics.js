// var a = 10; //functional scope var
// a = "hello";

// for (var i = 0; i < 5; i++) {
//   (function (j) {
//     setTimeout(function () {
//       console.log("hello " + j);
//     }, 1000);
//   })(i);
// } //IIFE which is used only once. IN this case used to work around functional scoping of var

// let b = 20; // block scope variable
// const VAL = 2000; //cannot change and has to be initialized

// //Hoisting
// console.log(typeof a) //Default value is undefined
// var a = 10

// print('Malav')//Function hoisted with its entire definition
// function print(name){
//     console.log(name)
// }

//Objects
var User = {
  name: "Malav",
  age: 20,
  address: "NJ",
  major: "CS",
  getUserDetails: function () {
    return this.name + ", " + this.major;
  },
};

// var user_1 = Object.create(User); //Only new object is updated and not the parent
// user_1.name = "Max";
// user_1.age = 25;
// user_1.getUserDetails = function () {
//   return this.name + ", " + this.major;
// };

// console.log(user_1);
// console.log(user_1.getUserDetails());

// var user_2 = new Object(User);
// console.log(user_2);
// user_2.name = "Jake";
// console.log(user_2);
// console.log(User); //Parent object also updated when new is used

//Function Overloading

function getArea() {
  console.log("Specify shape for area");
}

function getArea(s) {
  return "Square: " + s * s;
}

function getArea(l, b) {
  return "REct: " + l * b;
}

// console.log(getArea(1, 2, 3));

//Function as a class
var funcClass = function (name, age) {
  this.name = name;
  this.age = age;
  this.getDetails = function () {
    return {
      name: this.name,
      age: this.age,
    };
  };
};

var obj = new funcClass("Malav", 20);
// console.log(obj.getDetails());

//Closure: Used for the function of access specifiers

function parent() {
  var name = "MAalv";
  var age = 20;
  var major = "CS";

  function child() {
    return {
      name,
      major,
    };
  }

  return child;
}

var cf = parent();
// console.log(cf());

//Event Loop

// setTimeout(function () {
//   console.log("I am first");
// }, 1000);

// setTimeout(function () {
//   console.log("I am second");
// }, 2000); //Will wait for 1 second after the first timeout is executed

//Call, apply, bind

var User2 = {
  name: "Jake",
  age: 22,
  major: "Medicine",
};

function Print(p1, p2) {
  console.log(this.name);
  console.log(this.major);
  console.log(p1);
  console.log(p2);
}

// Print.call(User, "p1", "p2");
// Print.apply(User, ["p1", "p2"]);

//Operators

var x = 2 + 3 * 5;

if (x === 17) {
  console.log("True");
}

if (x == "17") {
  console.log("Weak equality");
}

var a = x == "17" ? "Weak" : "Strong"; //Ternary
console.log(a);
