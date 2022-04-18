// so we can use engineer
const Engineer = require("../lib/Engineer");

// creating the engineer object
test('creates Engineer object', () => {
  // build just like employee, pattern pattern pattern :)
  const engineer = new Engineer("Karen", "02", "kathy@gmail.com", "karen02");
  expect(engineer.github).toEqual(expect.any(String));
});

// to get their github from getGithub()
test('gets the Engineers github', () => {
  const engineer = new Engineer("Karen", "02", "kathy@gmail.com", "karen02");
  expect(engineer.getGithub()).toEqual(expect.any(String));
});

// to get their role from getRole()
test('gets Employee role', () => {
  const engineer = new Engineer("Karen", "02", "kathy@gmail.com", "karen02");        
  expect(engineer.getRole()).toEqual("Engineer");
});