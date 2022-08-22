//Filter, map, some and reduce
//Advanced iterators, give us a shollow copy of the data
//maintain data immutability

let personList = [
  { id: 1, name: "John", savedBy: "Captain" },
  { id: 2, name: "Jake", savedBy: "IronMan" },
  { id: 3, name: "Michael", savedBy: "Thor" },
  { id: 4, name: "Robin", savedBy: "IronMan" },
  { id: 5, name: "Jill", savedBy: "Thor" },
];

let pplSavedIronMan = personList.filter(
  (person) => person.savedBy == "IronMan"
);
// console.log(pplSavedIronMan);

let pplSavedThor = personList
  .map((person) => (person.savedBy === "Thor" ? person.name : ""))
  .filter((p) => p != "");

// console.log(pplSavedThor);

let savedByCaptain = personList.some((pern) => pern.savedBy === "Captain");
console.log(savedByCaptain);

// console.log(savedByCaptain);

let countSaved = personList.reduce((prevVal, curVal, index, array) => {
  console.log(prevVal);
  console.log(curVal);
  prevVal[curVal.savedBy] = prevVal[curVal.savedBy]
    ? prevVal[curVal.savedBy] + 1
    : 1;

  return prevVal;
}, new Set());

console.log(countSaved);

//Generator function: it can yield as many times as possible upon single invocation
