const app = require("express").Router();
const employeeController = require("../controller/employee");

// endpoint to get all the employees
app.get("/all", employeeController.getEmployees);

// endpoint to get paginated result
app.get("/", employeeController.getEmployees);

// endpoint to get an employee
app.get("/:id", employeeController.getEmployeeById);

// endpoint to create an employee
app.post("/", employeeController.createEmployee);

// endpoint to delete an employee
app.delete("/:id", employeeController.deleteEmployee);

// endpoint to update an employee
app.put("/:id", employeeController.updateEmployee);

module.exports = app;
