//Q2.
var x = "Robert";
console.log(typeof x);

x = 20;
console.log(typeof x);

x = false;
console.log(typeof x);

x = { myname: "Test me" };
console.log(typeof x);

x = 251666665;
console.log(typeof x);

x = undefined;
console.log(typeof x);

x = null;
console.log(typeof x);

x = {};
console.log(typeof x);

x = -32767;
console.log(typeof x);

//Q3.
function showUserInfo(first, last, age) {
  console.log(`First: ${first}, Last: ${last}, Age: ${age}`);
}

showUserInfo("Malav", "Doshi", 20);

//Q4.
function add(a, b, c) {
  return a + b + c;
}

console.log(add(1, 2, 3));

//Q5.

//Web API's are first moved to the stack and wait till the given time
//After thet will be moved to the event queue and will wait for the main stack to be empty
setTimeout(function () {
  console.log("I am first");
}, 1000);

setTimeout(function () {
  console.log("I am second");
}, 2000); //Will wait for 1 second after the first timeout is executed because both the timeouts would have been in the stack for 1 sec.

//Q6.
var module = require("./module");

console.log(
  module.callAndApply +
    ", " +
    module.event +
    ", " +
    module.functionalScope +
    ", " +
    module.hoist
);
