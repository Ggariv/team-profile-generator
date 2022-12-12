// node modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require("./src/page-template.js");
// lib modules
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
// array for employees
const newEmployeeData = [];
// array object questions
const questions = async() => {
    const answers = await inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is your ID number?",
                name: "id",
            },
            {
                type: "input",
                message: "What is your email?",
                name: "email",
            },
            {
                type: "list",
                message: "What is your role?",
                name: "role",
                choices: ["Engineer", "Intern", "Manager"],
            },
            ])
    // list of answers -> further questions per position
    // if Manager is selected
    if(answers.role === 'Manager') {
        const managerAns = await inquirer
        .prompt([
            {
                type: "input",
                message: "What is your office number?",
                name: "officeNumber",
            },
            ])
        const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            managerAns.officeNumber
            );
        newEmployeeData.push(newManager);
        }
    // if Engineer is selected
    else if (answers.role === 'Engineer') {
        const engineerAns = await inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is your GitHub user name?",
                    name: "github",
                }
                ])
        const newEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            engineerAns.github
            );
        newEmployeeData.push(newEngineer);
        }
    // if Intern is selected
    else if (answers.role === 'Intern') {
        const internAns = await inquirer
            .prompt([
                {
                    type: "input",
                    message: "What college/university did you attend?",
                    name: "school",
                },
                ])
        const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            internAns.school
            )
        newEmployeeData.push(newIntern);
        };
    };
async function promptQuestions() {
    await questions()
    const addMemberAns = await inquirer
        .prompt([
            {
                type: 'list',
                message: "Will you add a new member or create the team?",
                choices: ['Add new member', 'Create team'],
                name:'addMember',    
            }
            ])
        if (addMemberAns.addMember === 'Add new member') {
            return promptQuestions();
            }
        return createTeam();
    }
promptQuestions();
function createTeam() {
    console.log("new employee",newEmployeeData);
    fs.writeFileSync("./dist/index.html", generateTeam(newEmployeeData), "utf-8");
    }