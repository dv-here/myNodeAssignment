const app = require("express").Router();
const employeeController = require("../controller/employee");

app.get("/", employeeController.getEmployees);
app.get("/:id", employeeController.getEmployeeById);
app.post("/", employeeController.createEmployee);
app.delete(":/id", employeeController.deleteEmployee);
module.exports = app;
