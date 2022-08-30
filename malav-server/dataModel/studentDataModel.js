let mongoose = require("mongoose");

let mongooseSchema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1/malav-server");

let studentSchema = new mongooseSchema(
  {
    name: { type: String, required: true },
    session: String,
    skillset: String
  },
  {
    versionKey: false,
  }
);

let studentUserModel = mongoose.model("student", studentSchema);

module.exports = studentUserModel;
