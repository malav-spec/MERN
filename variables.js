// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log("hello " + i);
//   }, 2000);
// }

for (var i = 0; i < 5; i++) {
  (function (jiife) {
    setTimeout(function () {
      console.log("hello " + jiife);
    }, 2000);
  })(i);
} //Use iife as a work around pass by reference for var

// console.log(i); Will give error because i is used outside of scope

//Let and const are block scope variables while var is a functional scope variable
