//Hash Map
let myMap = new Map();

let a = "string";
let keyObj = {};
let keyFunc = function () {};

myMap.set(a, "Hello");
myMap.set(keyObj, "This is an object");
myMap.set(keyFunc, "This is a function");

// console.log(myMap);
// console.log(myMap.get(keyObj));
// console.log(myMap.get({}));
// console.log(myMap.entries());

//Hash Set
let StudentSet = new Set(["Malav", "Jake", "Dave", "Tom", "Trevor"]);

StudentSet.add("Mark");
StudentSet.add({});
console.log(StudentSet.values());
// console.log(StudentSet.has("Malav"));
console.log();
