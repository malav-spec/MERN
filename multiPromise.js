// authentication
//   .then("To get resolve callback data")
//   .catch("To get reject callback data");

// let authentication = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       status: 200,
//       msg: "auth",
//       "promise date": new Date().toDateString(),
//     });
//   }, 1000);
// });

// let authorization = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       status: 200,
//       msg: "authorization",
//       "promise date": new Date().toDateString(),
//     });
//   }, 2000);
// });

// let getUserCart = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       status: 200,
//       msg: "get user cart",
//       "promise date": new Date().toDateString(),
//     });
//   }, 3000);
// });

// Promise.allSettled([authentication, authorization, getUserCart])
//   .then((data) => console.log("All data ", data))
//   .catch((err) => console.log("Err data ", err));

let mern = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      status: "success",
      msg: "auth",
      "promise date": new Date().toDateString(),
    });
  }, 1000);

  setTimeout(() => {
    reject({
      status: "failed",
      msg: "MERN session",
      "promise date": new Date().toDateString(),
    });
  }, 1000);
});

let java = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      status: "success",
      msg: "Java session",
      "promise date": new Date().toDateString(),
    });
  }, 2000);

  setTimeout(() => {
    reject({
      status: "failed",
      msg: "Java session",
      "promise date": new Date().toDateString(),
    });
  }, 2000);
});

let sql = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      status: "success",
      msg: "SQL sessoin",
      "promise date": new Date().toDateString(),
    });
  }, 3000);

  setTimeout(() => {
    reject({
      status: "failed",
      msg: "SQL session",
      "promise date": new Date().toDateString(),
    });
  }, 3000);
});

Promise.allSettled([mern, java, sql])
  .then((data) => console.log("All data ", data))
  .catch((err) => console.log("Err data ", err))
  .finally((err) => {
    console.log("Finally ", err);
  });
