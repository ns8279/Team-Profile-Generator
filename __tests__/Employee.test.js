const Employee = require ('../lib/Employee.js'); // requires the employee.js file to pass the test

test('create an employee object', () => {
    const employee = new Employee('Alex', 4007, 'alex@g.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.Id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

/*
Test to check the get name method
*/
test('Can get name via the getName method', ()=>{
    const employee = new Employee('Alex', 4007, 'alex@g.com');
    
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

/*
Test to check the get id method
*/
test('Can get name via the getid method', ()=>{
    const employee = new Employee('Alex', '4007', 'alex@g.com');
    
    expect(employee.getId()).toEqual(expect.stringContaining(employee.Id.toString()));
});

/*
Test to check the get email method
*/
test('Can get name via the getEmail method', ()=>{
    const employee = new Employee('Alex', 4007, 'alex@g.com');
    
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

/*
Test to check the get role method
*/
test('Can get name via the getRole method', ()=>{
    const employee = new Employee('Alex', 4007, 'alex@g.com');
    
    expect(employee.getRole()).toEqual("Employee");
});



