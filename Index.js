/*
    Importing all the necessary files 
*/
const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee.js')
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const employee = [];  //Setting employee to an empty array to push memebers in when added later

/*
    Calling the necessary functions to initialize the app
*/
function initApp() {
    startHTML();
    addMember();
}

/*
    Function to add memebers to the Array with the user input
*/
function addMember() {
    return inquirer.prompt([
        {       
           type: "input",
            name: "name",
            message: "Enter the Employee name (Required)",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter a Valid name!");
                    return false;
                }
            }
        },

        {
            type: "list",
            name: "role",
            message: "Select the role of the team member you wish to add.",
            choices: ['Engineer', 'Intern', 'Manager'],
            
        },

        {
            type: "input",
            name: "id",
            message: "Please enter the Employee ID",
            validate: function ValidateId(id) {  //This will validate if the entered input value is number 
                var regex = /^\d+$/;
                return regex.test(id) || "ID should be number only.";
            }

        },

        {
            type: "input",
            name: "email",
            message: "Please enter the Employee email address",
            validate: function ValidateEmail(email) { //This will validate if the user has appropriate email id
                var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return regex.test(email) || "Please enter a valid email address!"
            }

        },
    ])
    .then(function({name, role, id, email}){

        let infoRole = "";

        /*  
            -to check if the appropriate role information is collected from the user
            -If its an Engineer the Github username should be the input 
            -If its an Intern the School Name should be the input 
            -If its a Manager the Office Number should be the input 
        */
        if(role === "Engineer"){
            infoRole = "Github Username";
        }
        else if(role === "Intern" ){
            infoRole = "School Name";
        }
        else {
            infoRole = "Office Phone Number";
        }
        inquirer.prompt([
            {
                type: "input",
                name: "infoRole", 
                message: `Enter the team member's ${infoRole}`
            },

            {
                type: "list",
                name: "addmore",
                message: "Do you wish to add more members?",
                choices: ["YES", "NO"]

            }
        ])
        .then(function({infoRole, addmore}){
            let newMember = "";

            //Create appropriate Employee from their Classes defined in Engineer.js, Intern.js and Manager.js
            if(role === "Engineer"){
                newMember = new Engineer(name, id, email, infoRole); //The "new" creates a new object of Engineer Class
            }
            else if (role === "Intern"){
                newMember = new Intern(name, id, email, infoRole); //The "new" creates a new object of Intern Class
            }
            else {
                newMember = new Manager(name, id, email, infoRole); //The "new" creates a new object of Manager Class
                
            }
            employee.push(newMember);
            addHTML(newMember);
            if(addmore === "YES"){
                console.log("Adding team memebers");
                addMember();
            }else {
                finishHTML();
                console.log("Your Team's Profile is generated! Check out the HTML page to view it in a Web-Browser")
            }
        });
    }); 
}

function startHTML() {
        const html = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

                <script src="https://use.fontawesome.com/24967b4054.js"></script>
                <title>Team Profile</title>
            </head>
            <body>
                <nav class="navbar mb-5 text-white" style = "background-color: palevioletred; height: 10rem;">
                    <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
                </nav>
                <div class="container">
                    <div class="row">`; 
        //using the file system module to write the HTML file
        fs.writeFile("./dist/team.html", html, function(err) {
            if (err) {
                console.log(err);
            }
        });
        console.log("Time to start your Team's Profile Data"); 
}

/*
    This function is used to write the new member data everytime the user enters the information of an employee
    This function will also be called at the start of the application
*/
function addHTML(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
        if (role === "Engineer") {
            const github = member.getGithubUserName();
            data = `<div class="col-4">
            <div class="card mx-auto mb-3" style="width: 20rem">
            <h5 class="card-header bg-primary text-white">${name}<br /><br /> ✍ Engineer <i class="fas fa-user-graduate"></i></h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></li>
            </ul>
            </div>
        </div>`;
        } else if (role === "Intern") {
            const school = member.getSchool();
            data = `<div class="col-4">
            <div class="card mx-auto mb-3" style="width: 20rem">
            <h5 class="card-header bg-primary text-white">${name}<br /><br /> 📚Intern  <i class="fas fa-glasses"></i></h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const officeNumber = member.officeNumber;
            data = `<div class="col-4">
            <div class="card mx-auto mb-3" style="width: 20rem">
            <h5 class="card-header bg-primary text-white">${name}<br /><br /> ☕ Manager </h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">Office Phone: ${officeNumber}</li>
            </ul>
            </div>
        </div>`
        }
        //console.log("adding team member");

        //using file system to append to the html file created at startHTML
        fs.appendFile("./dist/team.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });   
    
}

//End of the HTML file
function finishHTML() {
                const html = ` </div>
                </div>
             
            </body>
            </html>`;
    
    /*
        using file system to append to the HTML created using startHTML. This will append to the end of the file.
    */ 
    fs.appendFile("./dist/team.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    //console.log("Checkout your Team Profile!");
}

initApp();

