let express = require("express");
let router = express.Router({});
let studentModel = require("../dataModel/studentDataModel");

router.get("/", (req, res) => {
  res.send(`<h2>Welcome to Student API</h2>
    <p><ul>
    <li>Get data</li>
    <li>Save data</li>
  </ul></p>`);
});

router.get("/save", (req, res) => {
  let studentObj = new studentModel(req.query);
  studentObj.save((err, data) => {
    if (err) {
      res.send("Error saving data");
    } else {
      res.send(data);
    }
  });
});

router.get("/get", (req, res) => {
  studentModel.find((err, data) => {
    if (err) {
      res.send("Error saving data");
    } else {
      res.send(data);
    }
  });
});

module.exports = router;
