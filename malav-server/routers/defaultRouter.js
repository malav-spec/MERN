let express = require("express");
let router = express.Router({});
let app = express();
// const prompt = require("prompt-sync")();
// let name = prompt("Enter your name");

// let name = prompt("Enter your name");
app.use("/", express.static("../public"));

router.get("/", (req, res) => {
  res.send(`<h2>Hello and welcome to my server</h2>`);
});

router.get("/list", (req, res) => {
  res.send(`<ul>
  <li>student</li>
  <li>admin</li>
</ul>`);
});

module.exports = router;
