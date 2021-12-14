const app = require("express").Router();
const employeeController = require("../controller/employee");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
