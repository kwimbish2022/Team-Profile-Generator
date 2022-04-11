// so we can use employee
const Employee = require("../lib/Employee");

// creating the employee object
test('creates Employee object', () => {
  const employee = new Employee('kathy', 1, 'example@gmail.com');

  expect(employee.employeeName).toEqual(expect.any(String));
  expect(employee.employeeId).toEqual(expect.any(Number));
  expect(employee.emailAddress).toEqual(expect.any(String));
});