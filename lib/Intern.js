class Intern {
    constructor(name, employeeId, emailAddress, school) {
      this.name = name;
      this.employeeId = employeeId;
      this.emailAddress = emailAddress;
      this.school = school;
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

    getSchool() {
      return "School"
    }  
    getRole() {
      return "Intern"
    }
  };
  
  module.exports = Intern;
  