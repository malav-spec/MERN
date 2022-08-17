var funcAsClass = function (name, age, addr) {
  (this.name = name),
    (this.age = age),
    (this.address = addr),
    (this.getUserDetails = function () {
      return {
        name: this.name,
        age: this.age,
        session: this.session,
        isStudent: this.isStudent,
      };
    });
};

var funcObj = new funcAsClass("Malav", 21, "79 Old st");

// console.log("User Details: ", funcObj.getUserDetails());
funcAsClass.prototype.session = "MERN";
funcAsClass.prototype.isStudent = true;
console.log(funcObj.getUserDetails());
