//Objects as a class

var User = {
  name: "Malav",
  age: 22,
  session: "MERN",
  getUserName: function () {
    return this.name;
  },
};

//inheritance: by new keyword

var Student = new Object(User);
Student.name = "Jake";
Student.address = "Somewhere";
Student.getAddress = function () {
  return this.address;
};

console.log(Student.getUserName());
console.log(Student.getAddress());
console.log(User);
var s = Object.create(User);

s.name = "Mal";
s.address = "On Earth";
s.getAddress = function () {
  return this.address;
};
// console.log(s);
// console.log(User);

// console.log(s.__proto__);
// console.log(User.__proto__);

var Session = {
  name: "MERN",
  duration: "2hr",
  getDuration: function () {
    return this.getDuration;
  },
};

// var s1 = new Object(Session);
// s1.name = "Java";
// s1.startTime = "2:00 pm";
// s1.getStartTime = function () {
//   return this.startTime;
// };

//Parent is not updated by Object.create
var s2 = Object.create(Session);
s2.name = "SQL";
s2.endTime = "6:00 pm";
s2.getEndTime = function () {
  return this.endTime;
};

console.log(s2.__proto__);
console.log(s2);
console.log(s2.getEndTime());

var o1 = {
  name: "Mike",
  age: 25,
  salary: 120,
};

var o2 = {
  name: "Tyson",
  age: 27,
  salary: 160,
  skills: "JS",
};

var o3 = {
  name: "Jacob",
  age: 24,
  salary: 220,
  address: "1 New st",
};

Object.assign(o1, o2);
console.log(o1);
