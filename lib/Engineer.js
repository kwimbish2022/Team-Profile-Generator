class Engineer {
    constructor(name, employeeId, emailAddress, github) {
      this.name = name;
      this.employeeId = employeeId;
      this.emailAddress = emailAddress;
      this.github = github;
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
      return "Engineer"
    }

    getGithub() {
      return "Github"
    }
  };
  
  module.exports = Engineer;
  