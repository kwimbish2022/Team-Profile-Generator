const Intern = require("../lib/Intern");

// creating the intern object
test('creates Intern object', () => {
    const intern = new Intern(employeeName, employeeId, emailAddress, school);  
    expect(intern.school).toEqual(expect.any(String));
});

// gets their school from getSchool()
test('gets Intern school', () => {
    const intern = new Intern(employeeName, employeeId, emailAddress, school);   
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern(employeeName, employeeId, emailAddress, school);
    expect(intern.getRole()).toEqual("Intern");
}); 