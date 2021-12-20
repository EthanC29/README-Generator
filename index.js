// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Generate an array of questions
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your application? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description for your application (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions for your application'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage instructions for your application'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Provide contribution guidelines for your application'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide ways to test your application'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license (Required)',
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please choose a license');
                    return false;
                }
            }
            
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username? (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email');
                    return false;
                }
            }
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(data) {

    fs.writeFile('README.md', generateMarkdown(data), err => {
        if (err) throw err;
        console.log('README complete!');
    });

}

// TODO: Create a function to initialize app
function init() {

    
    
    promptUser().then(answers => writeToFile(answers));

}

// Function call to initialize app
init();
