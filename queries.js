const queries = require('./queries');
class Queries {
    constructor(connection) {
      this.connection = connection;
    }
  
    getAllDepartments() {
      return this.connection.promise().query('SELECT * FROM department');
    }
  
    getAllRoles() {
      return this.connection.promise().query('SELECT * FROM role');
    }
  
    getAllEmployees() {
      return this.connection.promise().query('SELECT * FROM employee');
    }
  
    addDepartment(name) {
      return this.connection.promise().query('INSERT INTO department (name) VALUES (?)', [name]);
    }
  
    addRole(title, salary, department_id) {
      return this.connection.promise().query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, department_id]);
    }
  
    addEmployee(first_name, last_name, role_id, manager_id) {
      return this.connection.promise().query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [first_name, last_name, role_id, manager_id]);
    }
  
    updateEmployeeRole(employeeId, newRoleId) {
      return this.connection.promise().query('UPDATE employee SET role_id = ? WHERE id = ?', [newRoleId, employeeId]);
    }
  }
  
  module.exports = Queries;
  