// pull in the Parent class items
const Employee = require("./Employee");

// in case I forget, here's where I found how to do extends/super https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends
class Intern extends Employee {
  constructor(employeeName, employeeId, emailAddress, school) {
    // adding in the employee constructor and then adding school  
    super (employeeName, employeeId, emailAddress);

    this.school = school;
  }

  // to get their school from the input
  getSchool() {
    return "School"
  } 

  // to change their role to intern
  getRole() {
    return "Intern"
  }
};

//so we can use elsewhere
module.exports = Intern;
  