const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/studentAPI")
  .then(() => console.log("Databaase is connected"))
  .catch((e) => console.log("Database is not connected"));