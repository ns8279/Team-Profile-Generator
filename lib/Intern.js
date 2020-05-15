/*
Requires the Employee Class file since Manager extends the Employee, 
without this the manager tests would fail 
*/
const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, Id, email, school){
        super(name, Id, email);

        this.school = school;
    }

    //Method to get the name of the school
    getSchool() {
        return this.school;
    }


    //This method will override the getrole method of the Employee class
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;