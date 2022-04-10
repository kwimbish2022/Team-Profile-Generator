
class Manager {
    constructor(name, employeeId, emailAddress, officeNumber) {
      this.name = name;
      this.employeeId = employeeId;
      this.emailAddress = emailAddress;
      this.officeNumber = officeNumber;
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

    getOfficeNumber() {
      return "officeNumber"
    }
  
    getRole() {
      return "Manager"
    }
  };
  
  module.exports = Manager;
  