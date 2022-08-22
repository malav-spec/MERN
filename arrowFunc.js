//Shorter way of writing a function like lambda expression
//() => {}
//Help resolving problem with "this" and replacing bind upto some extent

// let add = (a,b) => {
//     return a + b

// }

let add = (a, b) => a + b;

// console.log(add(2, 3));

let StudentTest = {
  fName: "Malav",

  getUserName: function () {
    console.log(this.fName);

    // setTimeout(function () {
    //   console.log(this.fName); will give undefined
    // }, 2000);

    //If we use arrow function in callback functions, then it copies the
    //context of immidiate parent function
    setTimeout(() => {
      console.log(this.fName);
      ``;
    }, 2000);
  },
};

StudentTest.getUserName();
