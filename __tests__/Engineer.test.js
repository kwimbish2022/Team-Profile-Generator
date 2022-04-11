// so we can use engineer
const Engineer = require("../lib/Engineer");

// creating the engineer object
test('creates Engineer object', () => {
  const engineer = new Engineer('kathy', 1, 'example@gmail.com', 'kwimbish2022');

  expect(engineer.github).toEqual(expect.any(String));
});