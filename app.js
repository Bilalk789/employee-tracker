const inquirer = require('inquirer');
const Database = require('./db');
const Queries = require('./queries');

const db = new Database();
const queries = new Queries(db.connection);

async function startApp() {
  try {
    await db.initialize(); // Connect to the database

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
      .then(async answer => {
        switch (answer.action) {
          case 'View all departments':
            const departments = await queries.getAllDepartments();
            console.table(departments);
            startApp();
            break;
          case 'View all roles':
            const roles = await queries.getAllRoles();
            console.table(roles);
            startApp();
            break;
          case 'View all employees':
            const employees = await queries.getAllEmployees();
            console.table(employees);
            startApp();
            break;
          case 'Add a department':
            await addDepartment();
            break;
          case 'Add a role':
            await addRole();
            break;
          case 'Add an employee':
            await addEmployee();
            break;
          case 'Update an employee role':
            await updateEmployeeRole();
            break;
          case 'Exit':
            console.log('Exiting application...');
            db.close();
            break;
        }
      });
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

async function addDepartment() {
  const answer = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the name of the department:'
    }
  ]);

  await queries.addDepartment(answer.name);
  startApp();
}

async function addRole() {
    const answer = await inquirer.prompt([
        {
          type: 'input',
          name: 'title',
          message: 'Enter the title of the role:'
        },
        {
          type: 'input',
          name: 'salary',
          message: 'Enter the salary for this role:'
        },
        {
          type: 'input',
          name: 'department_id',
          message: 'Enter the department ID for this role:'
        }
      ]);
      
      await queries.addRole(answer.title, answer.salary, answer.department_id);
      startApp();
}

async function addEmployee() {
    const answer = await inquirer.prompt([
        {
          type: 'input',
          name: 'first_name',
          message: 'Enter the first name of the employee:'
        },
        {
          type: 'input',
          name: 'last_name',
          message: 'Enter the last name of the employee:'
        },
        {
          type: 'input',
          name: 'manager_id',
          message: 'Enter the manager ID for this employee (if applicable):'
        }
      ]);
    
      await queries.addEmployee(answer.first_name, answer.last_name, answer.role_id, answer.manager_id);
      startApp();
    }

async function updateEmployeeRole() {
    const employees = await queries.getAllEmployees();
    const employeeChoices = employees.map(employee => ({
      name: `${employee.first_name} ${employee.last_name}`,
      value: employee.id
    }));
  
    const roles = await queries.getAllRoles();
    const roleChoices = roles.map(role => ({
      name: role.title,
      value: role.id
    }));
  
    const answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'employeeId',
        message: 'Select the employee whose role you want to update:',
        choices: employeeChoices
      },
      {
        type: 'list',
        name: 'roleId',
        message: 'Select the new role for this employee:',
        choices: roleChoices
      }
    ]);
  
    await queries.updateEmployeeRole(answer.employeeId, answer.roleId);
    startApp();
  }
startApp();
