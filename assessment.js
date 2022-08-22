//1.
//a.

const heroes = [
  { name: "Wolverine", family: "Marvel", isEvil: false },
  { name: "Deadpool", family: "Marvel", isEvil: false },
  { name: "Magneto", family: "Marvel", isEvil: true },
  { name: "Charles Xavier", family: "Marvel", isEvil: false },
  { name: "Batman", family: "DC Comics", isEvil: false },
  { name: "Harley Quinn", family: "DC Comics", isEvil: true },
  { name: "Legolas", family: "Tolkien", isEvil: false },
  { name: "Gandalf", family: "Tolkien", isEvil: false },
  { name: "Saruman", family: "Tolkien", isEvil: true },
];

let notEvil = heroes.filter((person) => person.isEvil === false);
// console.log(notEvil);

//b.unique family names
//Get the family names using map function and then convert it into a set for uniqueness.
let uniqueFamily = [...new Set(heroes.map((hero) => hero.family))];
// console.log(uniqueFamily);

//c.print hero names from given objects and print sir befor their names
// for (let i = 0; i < heroes.length; i++) {
//   console.log(`Sir ${heroes[i].name}`);
// }

//d.Marvel family and not evil
let marvelNotEvil = heroes.some(
  (hero) => hero.family === "Marvel" && hero.isEvil === false
);
// console.log(marvelNotEvil);

//2. Maps and Sets
let myMap = new Map();

let user = {
  name: "Malav",
  age: 20,
};

let string = "hey";
let arr = [1, 2, 3, 4];

myMap.set(user, "Object value");
myMap.set(12, "Number value");
myMap.set(string, "String value");
myMap.set(arr, "Array value");

// console.log(myMap.get(string));

if (myMap.has(12)) {
  console.log("there is a key with value 12");
}

myMap.clear();
// console.log(myMap);

let mySet = new Set();
mySet.add("Hello");
mySet.add(23);
mySet.add(user);

// console.log(mySet.has("Hello"));
const itr = mySet.entries();
// console.log(itr.next().value[0]);
// console.log(itr.next().value[0]);
mySet.clear();

//3.Promise

function resolveAfter2Seconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        status: "success",
        msg: [
          "arrow func",
          "spread and rest",
          "promise",
          "let and const",
          "tempelate literals",
        ],
        code: 200,
      });
    }, 2000);

    setTimeout(() => {
      reject({
        status: "Failed",
        msg: "server is down",
        code: 500,
      });
    }, 5000);
  });
}

// exPromise
//   .then((data) => {
//     console.log(data.msg);
//   })
//   .catch((data) => {
//     "Error caught", data;
//   });

//4. Async Await
async function asyncCall() {
  console.log("Before await");

  await resolveAfter2Seconds()
    .then((data) => console.log("Await data then ", data))
    .catch((err) => console.log("Await data catch", err));

  console.log("After await");

  console.log("Before await 2");

  await resolveAfter2Seconds()
    .then((data) => console.log("Await data then 2 ", data))
    .catch((err) => console.log("Await data catch 2 ", err));

  console.log("After await 2");
}
// asyncCall();

console.log("async Execution ends");

//5. spread and rest

function Students(...names) {
  console.log(...names);
}

// Students("s1", "s2", "s3", "s4", "s5");

//6.
const person = {
  userDetails: {
    first: "FirstName",
    last: "LastName",
  },
};

let {
  userDetails: { last, contact = "9119119110" },
} = person;
// console.log(last, contact);

//7. Const data manipulation
const obj = {
  name: "Malav",
  lastName: "Doshi",
  age: 18,
};

obj.age = 20;
// console.log(obj);

//8.for-of loop does index based iteration. sO if it has a composite array it will break the loop. While for-in loop goes over the elements of the array
let a = [1, 2, 3, 4, 5];
a.foo = "bar";
a.key = "value";

console.log(a);
for (key in a) {
  //   console.log(key);
}

for (key of a) {
  //   console.log(key);
}

//9. There is a task where we need to make three server calls - named as signin, userregistration and nextpageToNavigate
//   all of them should contain a status code and status success or failed
//   Create three promises for the same and we need to make sure that we move the user to next page only when all the calls are succeede

let signin = function () {
  return new Promise((resolve, reject) => {
    //authentication
    setTimeout(() => {
      resolve({
        status: 200,
        msg: "sign in",
      });
    }, 1000);
    setTimeout(() => {
      reject({
        status: 404,
        msg: "sign in failed",
      });
    }, 1000);
  });
};

let userregistration = function () {
  return new Promise((resolve, reject) => {
    //authorization

    setTimeout(() => {
      resolve({
        status: 201,
        msg: "user registration",
      });
    }, 2000);

    setTimeout(() => {
      reject({
        status: 405,
        msg: "user registration failed",
      });
    }, 2000);
  });
};

let nextpageToNavigate = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        status: 202,
        msg: "next page navigate",
      });
    }, 3000);

    setTimeout(() => {
      reject({
        status: 406,
        msg: "getusercart",
      });
    }, 3000);
  });
};

// Promise.allSettled([signin, userregistration])
//   .then((data) => {
//     console.log("then ", data);
//   })
//   .catch((err) => {
//     console.log("catch ", err);
//   })
//   .finally((err) => {
//     console.log("Finally ", err);
//   });

let async_in_method = function () {
  let signIn = signin();
  let userRegistration = userregistration();

  let combinePromise = Promise.allSettled([signIn, userRegistration]);
  return combinePromise;
};

//10.
let asyncFunc = async function () {
  let data = await async_in_method();
  // console.log(data[1].value.status);
  //   console.log(data[0].status);

  if (
    data[0].status === "fulfilled" &&
    data[1].status === "fulfilled" &&
    data[0].value.status === 200 &&
    data[1].value.status === 201
  ) {
    console.log("Sign in and registration successful");
    Promise.allSettled([nextpageToNavigate()]).then((data) =>
      console.log(data)
    );
  } else {
    console.log("Sign in and registration not successful");
  }
};

asyncFunc();
