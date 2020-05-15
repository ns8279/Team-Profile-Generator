const Manager = require ('../lib/Manager.js'); // requires the manager.js file to pass the test

test('create an manager object', () => {
    const manager = new Manager('Alex', 4007, 'alex@g.com', 23);

    // expect(manager.name).toEqual(expect.any(String));
    // expect(manager.Id).toEqual(expect.any(Number));
    // expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

/*
Test to check the getRole method of the Manager class
*/ 
test('Can get role via the getRole',() => {
    const manager = new Manager('Alex', 4007, 'alex@g.com', 23);
    
    expect(manager.getRole()).toEqual("Manager");
});