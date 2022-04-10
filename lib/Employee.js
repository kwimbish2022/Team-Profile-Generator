class Employee {
  constructor(name, employeeId, emailAddress) {
    this.name = name;
    this.employeeId = employeeId;
    this.emailAddress = emailAddress;
  }

  getName() {
    return "Name"
  }

  getId() {
    return "Id"
  }

  getEmail() {
    return "Email"
  }

  getRole() {
    return "Employee"
  }
};

module.exports = Employee;
