const Intern = require("../lib/Intern");

// creating the intern object
test('creates Intern object', () => {
    const intern = new Intern('kathy', 1, 'example@gmail.com', 'Wash U');
  
    expect(intern.school).toEqual(expect.any(String));
});