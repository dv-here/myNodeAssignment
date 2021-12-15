const db = require("../configs/database");

let Employee = function (employee) {
  this.employee_name = employee.employee_name;
  this.employee_salary = employee.employee_salary;
  this.employee_age = employee.employee_age;
  this.profile_image = employee.profile_image;
};

// get all employees
Employee.getAllEmp = (page, limit, resp) => {
  const offset = (page - 1) * limit;
  if (page == 0) {
    db.query(`SELECT * FROM employees;`, (err, res) => {
      if (err) {
        console.log(`Error fetching the employee`, err);
        resp(null, err);
      } else {
        console.log(`Employees retrieved!`);
        resp(null, res);
      }
    });
  } else {
    db.query(
      `SELECT * FROM employees LIMIT ${limit} OFFSET ${offset};`,
      (err, res) => {
        if (err) {
          console.log(`Error fetching the employee`, err);
          resp(null, err);
        } else {
          console.log(`Employees retrieved!`);
          resp(null, res);
        }
      }
    );
  }
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
  db.query("DELETE FROM employees WHERE id=?", id, (err, res) => {
    if (err) {
      console.log(`Error fetching the employee`, err);
      resp(null, err);
    } else {
      //   console.log(`Employees deleted!`);
      resp(null, res);
    }
  });
};

// update an employee
Employee.updateEmp = (id, newEmpData, resp) => {
  db.query(
    "UPDATE employees SET employee_name=? employee_salary=? employee_age=? profile_image=? where id=?",
    [
      newEmpData.employee_name,
      newEmpData.employee_salary,
      newEmpData.employee_age,
      newEmpData.profile_image,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("Error during the update!");
        resp(null, err);
      } else {
        resp(null, res);
      }
    }
  );
};

module.exports = Employee;
