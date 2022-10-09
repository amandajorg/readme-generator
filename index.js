// TODO: Include packages needed for this application

const { default: inquirer } = require("inquirer");
const inquirer = require('inquirer');
const fs = require(`fs`);

inquirer
    .prompt([
        // TODO: Create an array of questions for user input
    {
    type: 'input',
    answer: 'answer'
    message: 'What is the title of your project?'
    },
    {
    type: 'input',
    answer: 'answer'
    message: 'What is the description of your project?'
    },
    {
    type: 'input',
    answer: 'answer'
    message: 'What is the installation process?'
    },
    {
    type: 'input',
    answer: 'answer'
    message: 'What is the usage?'
    },
    {
    type: 'input',
    answer: 'answer'
    message: 'What is the license?'
    },
    {
    type: 'input',
    answer: 'answer'
    message: 'Who are the contributors?'
    },
    {
    type: 'input',
    answer: 'answer'
    message: 'What tests were performed?'
    },
    {
    type: 'input',
    answer: 'answer'
    message: 'Any questions or learnings?'
    },
    {
    type: 'input',
    answer: 'answer'
    message: 'What is your githib username?'
    },
    {
    type: 'input',
    answer: 'answer'
    message: 'What is your email address?'
    },
    ])
.then (data => {
    const filename = `$data.answer
    .toLowerCase()
    .split(' ')
    .join('')}.json`;

fs.writeFile(filename, JSON.stringify(data, null, '/t'), err =>
err ? console.log(err) : console.log(Success!)
);
});



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
