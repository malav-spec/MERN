let arr = ["Chicago", "SFO", "New York", "Sydney"];

// console.log(...arr); //spread

let User = {
  name: "Malav",
  age: 22,
};

let User3 = {
  ...User,
  address: "New Street",
};

// console.log(User3);
// User.newProp = "My way";
// console.log(User3);
// console.log(User);

function sum(a = 0, b = 0, c = 0, d = 0) {
  return a + b + c + d;
}

let nums = [1, 2, 3, 4, 5];

// console.log(sum(...nums));
// console.log(sum.apply(null, nums));

//Rest: Params that we receive in any function

function Sum(...numbers) {
  let total = 0;
  //   console.log(numbers);
  //   for (let num of numbers) {
  //     total += num;
  //   }

  //   return total;

  total = numbers.reduce((prevVal, currVal, currIdx, array) => {
    //Callback function
    // console.log(prevVal, currVal);
    return prevVal + currVal;
  }, 0); //prevVal = 0 initialization
  return total;
}

// console.log(Sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//Questions:
//Create a list of vaccines and print it
//Create a doctor object and print his qualification and print using spread
//Create a vaccine object with: name, no. of does, price and merge it with the doctor object

let vaccines = ["Pfizer", "Moderna", "J&J", "CoviShield"];
// console.log(...vaccines);

let Doctor = {
  name: "Dr. Phil",
  qualifications: "Surgeon",
  specification: "cardiac",
};

let Vaccine = {
  name: "Pfizer",
  doses: 3,
  price: "1$",
  treats: "Covid - 19",
};

let appt = {
  ...Doctor,
  ...Vaccine,
};

// console.log(appt);
// console.log(Doctor);
// console.log(Vaccine);

//Rest
//create a function which accepts start and end of number and generates a array of that size, [100....150]
//then use this array to pass as spread operator into a function named largesum
//in largesum we should accept the array in rest parameter (...arrayOfNums), and then add the numbers

function generateArr(start = 0, end = 10) {
  arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }

  return arr;
}

// console.log(generateArr(1, 20));

function largeSum(...nums) {
  let total = 0;

  total = nums.reduce((prevVal, currVal) => {
    return prevVal + currVal;
  }, 0);

  return total;
}

console.log(largeSum(...generateArr(1, 10)));
