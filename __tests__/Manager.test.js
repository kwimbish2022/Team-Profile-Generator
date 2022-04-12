// so we can use manager
const Manager = require("../lib/Manager");

// creating the manager object
test('creates Manager object', () => {
  const manager = new Manager(employeeName, employeeId, emailAddress, officeNumber);
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets their officeNumber from getOffice()
test('gets Managers office number', () => {
  const manager = new Manager(employeeName, employeeId, emailAddress, officeNumber);
  expect(manager.getOffice()).toEqual(expect.any(String));
});

// gets role from getRole()
test('gets role of employee', () => {
  const manager = new Manager(employeeName, employeeId, emailAddress, officeNumber);
  expect(manager.getRole()).toEqual("Manager");
});