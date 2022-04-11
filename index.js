//to link to creating the html page
const generateHTML = require('./src/generateHTML');

// group profile list (from lib)
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// node we need
const fs = require('fs');
const inquirer = require('inquirer');

// all employee array
const allEmployees = [];

// adding a manager to the all employee
const addManager = ( => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the manager of this group? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You must enter the Managers name.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'employee id',
      message: 'Please enter the managers employee Id number. (Required)',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('You must enter the Managers employee id number.');
          return false;
        }
      } 
    },
    {
      type: 'input',
      name: 'email address',
      message: 'Please enter the managers email address. (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('You  must enter the managers email address.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'office number',
      message: 'Please enter the managers office number. (Required)',
      validate: officeInput => {
        if (officeInput) {
          return true;
        } else {
          console.log('You  must enter the managers office number.');
          return false;
        }
      }
    }
  ])
  .then(managerInput => {
    const { employeeName, employeeId, emailAddress, officeNumber } = managerInput;
    const manager = new Manager (employeeName, employeeId, emailAddress, officeNumber);

    allEmployees.push(manager);
    console.log(manager);
  })
});