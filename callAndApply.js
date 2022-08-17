var student = {
  name: "Malav",
  age: 21,
};

function printInfo(param1, param2) {
  console.log(
    `Name: ${this.name}, Age: ${this.age}, p1: ${param1}, p2: ${param2}`
  );
}

printInfo.call(student, "p1", "p2");
printInfo.apply(student, ["p1", "param2"]);
