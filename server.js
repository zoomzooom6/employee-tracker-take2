const getUsers = require('./models/queries');
const inquirer = require('inquirer');

console.log(`
==========================================================
        WELCOME TO THE EMPLOYEE MANAGEMENT SYSTEM
==========================================================`);
console.log('Printing first query.....');
getUsers(3, 2);

const userPrompts = () => {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'list',
            name: 'choice',
            message: 'What do you want.',
            choices: ['View All Employees', 'View All Roles', 'View All Departments', 'Cry']
        }
    ])
        .then(answers => {
            console.log(answers);
        })
};

userPrompts();