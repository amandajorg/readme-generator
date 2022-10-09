// TODO: Include packages needed for this application

// const { default: inquirer } = require("inquirer");
const inquirer = require('inquirer');
const fs = require(`fs`);

inquirer
    .prompt([
        // TODO: Create an array of questions for user input
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    },
    {
    type: 'input',
    name: 'description',
    message: 'What is the description of your project?'
    },
    {
    type: 'input',
    name: 'installation',
    message: 'What is the installation process?'
    },
    {
    type: 'input',
    name: 'usage',
    message: 'What is the usage?'
    },
    {
    type: 'input',
    name: 'license',
    message: 'What is the license?'
    },
    {
    type: 'input',
    name: 'contributors',
    message: 'Who are the contributors?'
    },
    {
    type: 'input',
    name: 'tests',
    message: 'What tests were performed?'
    },
    {
    type: 'input',
    name: 'questions',
    message: 'Any questions or learnings?'
    },
    {
    type: 'input',
    name: 'github',
    message: 'What is your githib username?'
    },
    {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
    },
    ])
.then (data => {
    console.log(data)

console.log(generateReadMeTemplate(data))

});

function generateReadMeTemplate (data) {
    // const template;
    return `
    # ${data.title}

    ## description
    ${data.description}

    ## installation
    ${data.installation}

    ## usage
    ${data.usage}

    ## license
    ${data.license}

    ## contributors
    ${data.contributors}

    ## tests
    ${data.tests}

    ## questions
    ${data.questions}

    ## github
    ${data.github}

    ## email
    ${data.email}
    `
}


// Put the fs functionality inside the writetofile function, call writetofile function where the fs is right now. 
// File name has to change.
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./generatedReadMe.md", generateReadMeTemplate(data), err => {
        // err ? console.log(err) : console.log('Success!')
        if (err) {
            console.log(err)
        } 
        else {
            console.log('Success!')
        }
    })
}

writeToFile();

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
