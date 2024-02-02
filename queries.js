class Queries {
  constructor(connection) {
    this.connection = connection;
  }

  async getAllDepartments() {
    try {
      const [rows, fields] = await this.connection.promise().query('SELECT * FROM department');
      return rows;
    } catch (error) {
      console.error('Error retrieving departments:', error);
      return [];
    }
  }

  async getAllRoles() {
    try {
      const [rows, fields] = await this.connection.promise().query('SELECT * FROM role');
      return rows;
    } catch (error) {
      console.error('Error retrieving roles:', error);
      return [];
    }
  }

  async getAllEmployees() {
    try {
      const [rows, fields] = await this.connection.promise().query('SELECT * FROM employee');
      return rows;
    } catch (error) {
      console.error('Error retrieving employees:', error);
      return [];
    }
  }

  async addDepartment(name) {
    try {
      await this.connection.promise().query('INSERT INTO department (name) VALUES (?)', [name]);
      console.log('Department added successfully!');
    } catch (error) {
      console.error('Error adding department:', error);
    }
  }

  async addRole(title, salary, department_id) {
    try {
      await this.connection.promise().query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, department_id]);
      console.log('Role added successfully!');
    } catch (error) {
      console.error('Error adding role:', error);
    }
  }

  async addEmployee(first_name, last_name, role_id, manager_id) {
    try {
      await this.connection.promise().query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [first_name, last_name, role_id, manager_id]);
      console.log('Employee added successfully!');
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  }

  async updateEmployeeRole(employeeId, newRoleId) {
    try {
      await this.connection.promise().query('UPDATE employee SET role_id = ? WHERE id = ?', [newRoleId, employeeId]);
      console.log('Employee role updated successfully!');
    } catch (error) {
      console.error('Error updating employee role:', error);
    }
  }
}

module.exports = Queries;
