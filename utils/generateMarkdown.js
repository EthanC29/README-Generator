// TODO: Create a function to generate markdown for README
function generateMarkdown(dataObj) {

  return `
  # ${dataObj.title}
  ![License Badge](https://img.shields.io/badge/license-${dataObj.license}-brightgreen)

  ## Description
  ${dataObj.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${dataObj.installation}

  ## Usage
  ${dataObj.usage}
  
  ## License
  ![License Badge](https://img.shields.io/badge/license-${dataObj.license}-brightgreen)
  This application is covered by ${dataObj.license} license.
  
  ## Contributing
  ${dataObj.contribution}
  
  ## Tests
  ${dataObj.test}
  
  ## Questions
  Created by: [${dataObj.username}](https://github.com/${dataObj.username})
  For any additional questions, I can be reached at [${dataObj.email}](mailto:${dataObj.email})
  `;

}

module.exports = generateMarkdown;