const Engineer = require ('../lib/Engineer.js'); // requires the engineer.js file to pass the test

test('create an engineer object', () => {
    const engineer = new Engineer('Alex', '4007', 'alex@g.com', 'ales45');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.gUserName).toEqual(expect.any(String));
});