// so we can use manager
const Manager = require("../lib/Manager");

// creating the manager object
test('creates Manager object', () => {
  const manager = new Manager("Mike", "02", "kathy@gmail.com", 2);
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets their officeNumber from getOffice()
test('gets Managers office number', () => {
  const manager = new Manager("Mike", "02", "kathy@gmail.com", "002");
  expect(manager.getOffice()).toEqual(expect.any(String));
});

// gets role from getRole()
test('gets role of employee', () => {
  const manager = new Manager("Mike", "02", "kathy@gmail.com", "002");
  expect(manager.getRole()).toEqual("Manager");
});