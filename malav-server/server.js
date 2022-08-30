let express = require("express");
let port = 9000;

let app = express();
let defaultRouter = require("./routers/defaultRouter");

let studentApp = express();
let studentRouter = require("./routers/studentRouter");
app.use("/static", express.static("public"));
app.use("/", defaultRouter);

app.use("/student", studentApp);
studentApp.use("/", studentRouter);

app.listen(port, () => {
  console.log("Server listening...");
});
