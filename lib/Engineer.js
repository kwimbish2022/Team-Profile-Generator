// pull in the Parent class items
const Employee = require("./Employee");

// in case I forget, here's where I found how to do extends/super https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends
class Engineer extends Employee {
  constructor(employeeName, employeeId, emailAddress, github) {
    // adding in the employee constructor and then adding github  
    super (employeeName, employeeId, emailAddress);

    this.github = github;
  }

  // to get the github from their input
  getGithub() {
    return this.github;
  }
      
  // so their role goes to engineer not employee
  getRole() {
    return "Engineer"
  }
};

//so we can use elsewhere
module.exports = Engineer;
  