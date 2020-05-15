const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, Id, email, github) {
        super(name,Id,)

        this.name = name;
        this.Id = Id;
        this.email = email;
        this.github = github;
    }

    //This method will override the getrole method of the Employee class
    getRole() {
        return 'Engineer';
    }

    //Method to get the github username via method
    getGithubUserName() {
        return this.github;
    }
}

module.exports = Engineer;