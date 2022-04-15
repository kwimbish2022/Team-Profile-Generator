//to link to creating the html page
const generateHTML = require('./utils/generateHTML.js');

// group profile list (from lib)
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// node we need
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

// all employee array
const allEmployees = [];

// adding a manager or employee/intern to the all employee array
const addEmployee = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'employeeName',
      message: 'Manager, please enter your name? (Required)',
      validate: employeeNameInput => {
        if (employeeNameInput) {
          return true;
        } else {
          console.log('You must enter your name.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'employeeId',
      message: 'Please enter your employee Id number. (Required)',
      validate: employeeIdInput => {
        if (employeeIdInput) {
          return true;
        } else {
          console.log('You must enter your employee id number.');
          return false;
        }
      } 
    },
    {
      type: 'input',
      name: 'emailAddress',
      message: 'Please enter your email address. (Required)',
      validate: emailAddressInput => {
        if (emailAddressInput) {
          return true;
        } else {
          console.log('You must enter your email address.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Please enter your office number. (Required)',
      validate: officeNumberInput => {
        if (officeNumberInput) {
          return true;
        } else {
          console.log('You must enter your office number.');
          return false;
        }
      }
    },
    {
      type:'loop',
      name: 'employees',
      message: 'Would you like to enter an employee? Y or N (Required)',
      questions: [
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
          type: 'list',
          name: 'role',
          message: 'What is the employee(s) role?',
          choices: ['Engineer', 'Intern']
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
        }
      ]
    }
  ])
};


// so we can get the HTML page file
function writeFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    // if theres any errors
    if (err) {
      return console.log(err);
    }
      console.log("Your all employee group page has been created. Please see index.html file.")
  });
}

// const writeFileAsync = util.promisify(writeFile);

// to initialize app
// async function init() {
//   const data = await addEmployee();
//   generateHTML(data);
// };

// init();

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
