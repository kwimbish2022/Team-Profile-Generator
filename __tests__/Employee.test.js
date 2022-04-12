// so we can use employee
const Employee = require("../lib/Employee");

// creating the employee object
test('creates Employee object', () => {
  // love how this pattern repeats, makes creating other tests easy :)
  const employee = new Employee(employeeName, employeeId, emailAddress);
  // reminder to self, toBe didn't work so used toEqual. Ask TA why difference.
  expect(employee.employeeName).toEqual(expect.any(String));
  expect(employee.employeeId).toEqual(expect.any(Number));
  expect(employee.emailAddress).toEqual(expect.any(String));
});

// to get their name from getName()
test('gets Employee name', () => {
  const employee = new Employee(employeeName, employeeId, emailAddress);
  expect(employee.getName()).toEqual(expect.any(String));
});

// to get their employee id from getId()
test('gets Employee ID', () => {
  const employee = new Employee(employeeName, employeeId, emailAddress); 
  expect(employee.getId()).toEqual(expect.any(Number));
});

// to get their email address from getEmail()
test('gets Employee email address', () => {
  const employee = new Employee(employeeName, employeeId, emailAddress);   
  expect(employee.getEmail()).toEqual(expect.any(String));
});

// to get their role from getRole()
test('gets Employee role', () => {
  const employee = new Employee(employeeName, employeeId, emailAddress);    
  expect(employee.getRole()).toEqual("Employee");
});


