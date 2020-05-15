/*
Requires the Employee Class file since Manager extends the Employee, 
without this the manager tests would fail 
*/
const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, Id, email, officeNumber){
        super(name, Id, email);

        this.officeNumber = officeNumber;
    }

     //This method will override the getrole method of the Employee class
     getRole() {
        return 'Manager';
    }
    
}

module.exports = Manager;