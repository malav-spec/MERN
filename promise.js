let lunchPRomise = new Promise((resolve, reject) => {
  //processing lunch party
  //promise is success
  //make a service call - output
  setTimeout(() => {
    resolve(
      {
        status: "success",
        msg: "lunch done",
        code: 200,
      },
      2000
    );
  });

  setTimeout(() => {
    reject({
      status: "Failed",
      msg: "server is down",
      code: 500,
    });
  }, 2000);
});

lunchPRomise
  .then((data) => {
    console.log("Promise resolved");
  })
  .catch((data) => {
    "Error caught", data;
  });
