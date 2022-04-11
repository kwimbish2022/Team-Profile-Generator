// so we can use manager
const Manager = require("../lib/Manager");

// creating the manager object
test('creates Manager object', () => {
  const manager = new Manager('kathy', 1, 'example@gmail.com', 1101);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});