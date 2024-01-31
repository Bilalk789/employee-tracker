const mysql = require('mysql2/promise');
const inquirer = require('inquirer');

async function executeSeedSQL() {
  try {
    // Create a MySQL connection
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'yourpassword',
      database: 'employee_tracker_db'
    });

    // Execute each SQL statement individually
    await connection.query("INSERT INTO department (name) VALUES ('Sales')");
    await connection.query("INSERT INTO department (name) VALUES ('Finance')");
    await connection.query("INSERT INTO department (name) VALUES ('Engineering')");
    // Similarly execute other SQL statements

    // Close the connection
    await connection.end();
    
    console.log('Seed SQL executed successfully');
  } catch (error) {
    console.error('Error executing seed SQL:', error);
  }
}

executeSeedSQL();

executeSeedSQL();
// Main function to start the application
function startApp() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          'Exit'
        ]
      }
    ])
    .then(answer => {
      switch (answer.action) {
        case 'View all departments':
          queries.getAllDepartments().then(departments => {
            console.table(departments);
            startApp();
          });
          break;
        case 'View all roles':
          queries.getAllRoles().then(roles => {
            console.table(roles);
            startApp();
          });
          break;
        case 'View all employees':
          queries.getAllEmployees().then(employees => {
            console.table(employees);
            startApp();
          });
          break;
        case 'Add a department':
          addDepartment();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Add an employee':
          addEmployee();
          break;
        case 'Update an employee role':
          updateEmployeeRole();
          break;
        case 'Exit':
          console.log('Exiting application...');
          db.close();
          break;
      }
    });
}

// Function to add a department
function addDepartment() {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the name of the department:'
    }
  ])
  .then(answer => {
    queries.addDepartment(answer.name).then(() => {
      console.log('Department added successfully!');
      startApp();
    });
  });
}

// Function to add a role
function addRole() {
// Implement similar to addDepartment function
}

// Function to add an employee
function addEmployee() {
// Implement similar to addDepartment function
}

// Function to update employee role
function updateEmployeeRole() {
// Implement similar to addDepartment function
}

// Start the application
startApp();