const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

const allEmployees = [];

// going to create all employee types in cards
const generateHTML = (data) => {
  const manager = new Manager (data.employeeName, data.employeeId, data.emailAddress, data.officeNumber);
  allEmployees.push(manager);
  console.log(manager);

  for(let i = 0; i < data.employees.length; i ++) {
    if (data.employees[i].role === "Engineer"){
      const engineer = new Engineer (data.employees[i].employeeName, data.employees[i].employeeId, data.employees[i].emailAddress, data.employees[i].github);
      allEmployees.push(engineer);
      console.log(engineer);
    } else {
      const intern = new Intern (data.employees[i].employeeName, data.employees[i].employeeId, data.employees[i].emailAddress, data.employees[i].school);
      allEmployees.push(intern);
      console.log(intern);
    }
  }
};

// export to index.js for running
module.exports = generateHTML; 

// const generateGroupPage = function (employeeCards) {  
//   return `
//   <!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Group Profile</title>
//     <link rel="stylesheet" href="style.css">
//   </head>
//   <body>
//     <header>
//       <header class="header">
//       <h1>Employee Group Profile</h1>
//     </header>
//     <div class="container">
//       <div class="row justify-content-center" id="group-cards">
//         <!--Group Cards-->
//         ${employeeCards}
//       </div>
//     </div>
//   </body>
//   </html>

// `;
// }


