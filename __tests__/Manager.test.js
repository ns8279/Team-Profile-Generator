const Manager = require ('../lib/Manager.js'); // requires the Manager.js file to pass the test

test('create a manager object', () => {
    const manager = new Manager('Alex', 4007, 'alex@g.com', 23);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

/*
Test to check the getRole method of the Manager class
*/ 
test('Can get role via the getRole',() => {
    const manager = new Manager('Alex', 4007, 'alex@g.com', 23);
    
    expect(manager.getRole()).toEqual("Manager");
});