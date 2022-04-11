// pull in the Parent class items
const Employee = require("./Employee");

// in case I forget, here's where I found how to do extends/super https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends
class Manager extends Employee {
  constructor(employeeName, employeeId, emailAddress, officeNumber) {
    // adding in the employee constructor and then adding office number  
    super (employeeName, employeeId, emailAddress);

    this.officeNumber = officeNumber;
  }

    // to change their role to manager
    // getRole() {
    //   return "Manager"
    // }

    // to get their office number from the input
    // getOffice() {
    //   return "Office Number"
    // } 
};

//so we can use elsewhere
module.exports = Manager;
  