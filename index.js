// node we need
const fs = require('fs');
const inquirer = require('inquirer');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

//to link to creating the html page
const generateHTML = require('./utils/generateHTML');

// group profile list (from lib)
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// all employee array
const allEmployees = [];

// adding a manager or employee/intern to the all employee array
const addEmployee = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: 'What is the employee(s) role?',
      choices: ['Manager', 'Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'employeeName',
      message: 'Enter the employee(s) name.',
    },
    {
      type: 'input',
      name: 'employeeId',
      message: 'Enter their employee id number.',
    },
    {
      type: 'input',
      name: 'emailAddress',
      message: 'Enter their email address.',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Enter the manager(s) office number.',
      when: (answers) => answers.role === 'Manager'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter the employee(s) github user name.',
      when: (answers) => answers.role === 'Engineer'
    },
    {
      type: 'input',
      name: 'school',
      message: 'Enter the intern(s) school.',
      when: (answers) => answers.role === 'Intern'
    },
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Would you like to add more staff?',
      default: false
    }
  ])

  .then(employeeData => {
    // for all the different employee roles
    console.log('ed', employeeData);
    let { employeeName, employeeId, emailAddress, officeNumber, role, github, school, confirmAddEmployee } = employeeData;
    let employee;

    if (role === "Manager") {
      employee = new Manager(employeeName, employeeId, emailAddress, officeNumber);
      console.log(employee);

    } else if (role === "Engineer") {
      employee = new Engineer(employeeName, employeeId, emailAddress, github);
      console.log(employee);

    } else if (role === "Intern") {
      employee = new Intern(employeeName, employeeId, emailAddress, school);
      console.log(employee);
    }

    allEmployees.push(employee);

    if (confirmAddEmployee) {
      return addEmployee(allEmployees);
    } else {
      return allEmployees;
    }
  })
};


// so we can get the HTML page file
const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {
    // if theres any errors
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Your all employee group page has been created. Please see index.html file.")
    }
  })
};

addEmployee()
  .then(allEmployees => {
    return generateHTML(allEmployees);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
    console.log(err);
  });
