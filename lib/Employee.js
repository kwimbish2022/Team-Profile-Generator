// for our employee parent class
class Employee {
  constructor(employeeName, employeeId, emailAddress) {
    this.employeeName = employeeName;
    this.employeeId = employeeId;
    this.emailAddress = emailAddress;
  }
    
//   to get their name from input
//   getName() {
//     return this.name;
//   }

//   to get their employeeId from input
//   getId() {
//     return this.employeeId;
//   }

//   to get their emailAddress from input
//   getEmail() {
//     return this.emailAddress;
//   }

//   to get their role/type from input
//   getRole() {
//     return "Employee"
//   }
};

//so we can use elsewhere
module.exports = Employee;
