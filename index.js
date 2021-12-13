// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("/utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const generatePage = (title, dataObj) => {

        let description = dataObj.description;
        let installation = dataObj.installation;
        let usage = dataObj.usage;
        let license = dataObj.license;
        let licenseBadge = dataObj.licenseBadge;
        let contribution = dataObj.contribution;
        let testInstructions = dataObj.testInstructions;
        let usernameGitHub = dataObj.username;
        let email = dataObj.email;

        return `
        # ${title}
        ${licenseBadge}

        ## Description
        ${description}

        ## Table of Contents
        * [Installation](#installation)
        * [Usage](#usage)
        * [License](#license)
        * [Contributing](#contributing)
        * [Tests](#tests)
        * [Questions](#questions)

        ## Installation
        ${installation}

        ## Usage
        ${usage}
        
        ## License
        This application is covered under ${license}
        
        ## Contributing
        ${contribution}
        
        ## Tests
        ${testInstructions}
        
        ## Questions
        Created by: [${usernameGitHub}](https://github.com/${usernameGitHub})
        For any additional questions, I can be reached at [${email}](mailto:${email})
        `;

    };

    fs.writeFile('README.md', generatePage(fileName, data), err => {
        if (err) throw err;
        console.log('README complete!');
    });
}

// TODO: Create a function to initialize app
function init() {

    const promptUser = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the name of your application? (Required)'
            },
            {
                type: 'input',
                name: 'description',
                message: 'Provide a description for your application (Required)'
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
                choices: 'Apache, Boost, BSD, Creative Commons, Eclipse, GNU, The Organization for Ethical Source, IBM, ISC, MIT, Mozilla, Open Data Commons, Perl, SIL, Unlicense, WTFPL, Zlib',
                default: 'Apache'
            },
            {
                type: 'input',
                name: 'github-username',
                message: 'What is your GitHub username? (Required)'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address? (Required)'
            }
        ]);
    };
    
    promptUser().then(answers => writeToFile(answers.title, answers));





    
}

// Function call to initialize app
init();
