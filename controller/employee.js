const Employee = require("../model/employeeModel");
const EmployeeModel = require("../model/employeeModel");

exports.getEmployees = (req, res) => {
  EmployeeModel.getAllEmp((err, employees) => {
    if (err) res.send(err);
    res.status(200).send({ count: employees.length, data: employees });
  });
};

// get an employee by id
exports.getEmployeeById = (req, res) => {
  EmployeeModel.getEmpById(req.params.id, (err, employee) => {
    if (err) res.status(404).send(err);
    console.log(req.params.id);
    res.status(200).json({ count: employee.length, data: employee });
  });
};

//create an employee
exports.createEmployee = (req, res) => {
  const emp = new EmployeeModel(req.body);
  EmployeeModel.createEmp(emp, (err, emp) => {
    if (err) res.status(404).send(err);

    res
      .status(200)
      .json({ status: "success", msg: "Employee created!", data: emp });
  });
};

// delete an employee
exports.deleteEmployee = (req, res) => {
  EmployeeModel.deleteEmp(req.params.id, (err, employee) => {
    if (err) res.status(404).send(err);
    console.log(req.params.id);
    res.status(200).send(employee);
  });
};

// update an employee
exports.updateEmployee = (req, res) => {
  const newEmployeeData = new Employee(req.body);
  EmployeeModel.updateEmp(req.params.id, newEmployeeData, (err, employee) => {
    if (err) res.status(400).send(err);
    res.status(200).send({ status: "update success", data: employee });
  });
};
