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

// adding a manager to the all employee array
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

// adding employees/interns to the all employee array
const addEmployee = () => {
  console.log(`adding employees to our group`);

  return inquirer.prompt([
    {
      type: 'input',
      name: 'role',
      message: 'Please select the employees role. (Required)',
      choices: ['Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the employees name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You must enter the employees name.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'employee id',
      message: 'Please enter the employees employee Id number. (Required)',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('You must enter the employees employee id number.');
          return false;
        }
      } 
    },
    {
      type: 'input',
      name: 'email address',
      message: 'Please enter the employees email address. (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('You  must enter the employees email address.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter the employees github username. (Required)',
      when: (input) => input.role === "Engineer",
      validate: usernameInput => {
        if (usernameInput) {
          return true;
        } else {
          console.log('You must enter the employeees github username.')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: 'Please enter the interns school name. (Required)',
      when: (input) => input.role === "Intern",
      validate: schoolInput => {
        if (schoolInput) {
          return true;
        } else {
          console.log('You must enter the interns school name.')
          return false;
        }
      }    
    },
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Would you like to add another employee?',
      default: false
    }  
  ])

  .then(employeeData => {
    // the data for all the different employee types
    let { employeeName, employeeId, emailAddress, role, github, school, confirmAddEmployee } = employeeData;
    let employee;

    if (role === "Engineer") {
      employee = new Engineer (employeeName, employeeId, emailAddress, github);
      console.log(employee);
    
    } else if (role === "Intern") {
      employee = new Intern (employeeName, employeeId, emailAddress, role, school);
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

const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {
    // if theres any errors
    if (err) {
      console.log(err);
      return;
    //when the employee team page has been created
    } else {
      console.log("Your all employee page has been created. Please see index.html file.")
    }
  })
};

addManager()
  .then(addEmployee)
  .then(allEmployees => {
    return generateHTML(allEmployees);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
  console.log(err);
});