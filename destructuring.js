let userDetails = ["Malav", "Doshi", 21];

//Array destruct.
// let [first, last, age] = userDetails;
// console.log(first, last, age);

//Desfaulting of v

//OBject destructuring
// let User = {
//   fname: "malav",
//   address: {
//     address1: "somewhere",
//     address2: "somewhere 2",
//   },
//   session: "ES6",
// };

// let {
//   fname,
//   session,
//   address: { address1, shippingAddress = "To Door step" },
// } = User;
// console.log(session, address1, shippingAddress, fname);

// let StudentTest = {
//   firstname: "Malav",
//   address: " ??",
//   sessionTopics: {
//     covered1: "CoreJS",
//     covered2: "OOJS",
//   },
// };

// let {
//   firstname,
//   sessionTopics: { covered1, covered2, covered3 = "ES6" },
//   lastName = "Doshi",
// } = StudentTest;
// console.log(firstname, covered1, covered2, lastName, covered3);

class Vaccination {
  constructor(name, date, place) {
    this.name = name;
    this.date = date;
    this.place = place;
  }

  getSchedule() {
    return {
      name: this.name,
      place: this.place,
    };
  }

  calculateArea = (a = 0, b = 0) => a * b;
}

let fDose = new Vaccination("Pfizer", "18 August 2022", "RWJ");
console.log(fDose.calculateArea(1, 2));

// class CalculateArea{

// }
