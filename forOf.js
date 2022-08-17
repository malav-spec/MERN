let person = { fname: "MAlav", lname: "Doshi", age: 20 };

for (key in person) {
  //   console.log(key);
}

let arr = [1, 2, 3, 4, 5, 6];
arr.foo = 10;
arr.bar = "BAZ";

// for (const num in arr) {
//   const element = arr[num];
//   console.log(element);
// }

for (var val of arr) {
  //   console.log(val);
} //Composite array breaks as val is iterated over indexes only

let cat = "meow",
  dog = "woof",
  bird = "chirp",
  lion = "roar";

let animalSounds = {
  cat,
  dog,
  bird,
  lion,
};

console.log(JSON.stringify(animalSounds));
console.log("", animalSounds);
