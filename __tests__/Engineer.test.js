const Engineer = require ('../lib/Engineer.js'); // requires the engineer.js file to pass the test

test('create an engineer object', () => {
    const engineer = new Engineer('Alex', 4007, 'alex@g.com', 'ales45');

    // expect(engineer.name).toEqual(expect.any(String));
    // expect(engineer.Id).toEqual(expect.any(Number));
    // expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

/*
Test to check the getRole methodof the Engineer class
*/ 
test('Can get role via the getRole',() => {
    const engineer = new Engineer('Alex', 4007, 'alex@g.com', 'ales45');
    
    expect(engineer.getRole()).toEqual("Engineer");
});

/*
Test to check the getGithubUserName methodof the Engineer class
*/ 
test('Can get github username via a method',() => {
    const engineer = new Engineer('Alex', 4007, 'alex@g.com', 'ales45');

    expect(engineer.getGithubUserName()).toEqual(expect.stringContaining(engineer.github.toString()));   
});


