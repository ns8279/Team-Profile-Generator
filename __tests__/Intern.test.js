const Intern = require('../lib/Intern.js'); //requires the Intern.js file to pass the test

test('create an Intern object', ()=>{
    const intern = new Intern('Alex', 4007, 'alex@g.com', 'RIT');

    expect(intern.school).toEqual(expect.any(String));
});

/*
Test to check the getRole method of the Intern class
*/ 
test('Can get role via the getRole',() => {
    const intern = new Intern('Alex', 4007, 'alex@g.com', 'RIT');
    
    expect(intern.getRole()).toEqual("Intern");
});