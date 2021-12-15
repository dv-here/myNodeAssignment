const db = require("../configs/database");

let Employee = function (employee) {
  this.employee_name = employee.employee_name;
  this.employee_salary = employee.employee_salary;
  this.employee_age = employee.employee_age;
  this.profile_image = employee.profile_image;
};

// get all employees
Employee.getAllEmp = (resp) => {
  db.query("SELECT * FROM employees;", (err, res) => {
    if (err) {
      console.log(`Error fetching the employee`, err);
      resp(null, err);
    } else {
      console.log(`Employees retrieved!`);
      resp(null, res);
    }
  });
};

//get employee by id
Employee.getEmpById = (id, resp) => {
  console.log(id);
  db.query("SELECT * FROM employees WHERE id=?", id, (err, res) => {
    if (err) {
      console.log(`Error fetching the employee`, err);
      resp(null, err);
    } else {
      resp(null, res);
    }
  });
};

//create an employee
Employee.createEmp = (emp, resp) => {
  db.query("INSERT INTO employees SET ?", emp, (err, res) => {
    if (err) {
      console.log(`Error fetching the employee`, err);
      resp(null, err);
    } else {
      resp(null, res);
    }
  });
};

// delete and employee based on id
Employee.deleteEmp = (id, resp) => {
  db.query("DELETE * FROM employees WHERE id=?", id, (err, res) => {
    if (err) {
      console.log(`Error fetching the employee`, err);
      resp(null, err);
    } else {
      console.log(`Employees deleted!`);
      resp(null, res);
    }
  });
};

module.exports = Employee;
