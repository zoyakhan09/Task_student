const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

require("./db/conn");
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

const Task = require("./models/taskinfo");

app.get("/", async (req, res) => {
  try {
    const gettask = await Task.find({});
    res.status(201).send(gettask);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server error" });
  }
});

app.post("/posttask", async (req, res) => {
  try {
    const insertData = await Task.create(req.body);
    console.log("Created Task Instance:", insertData);
    res.status(201).json({ message: "Task added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error on post Task" });
  }
});

app.listen(port, () => {
  console.log(`server is listening at port number ${port}`);
});