const inquirer = require("inquirer");
const fs = require("fs"); 

// Create the prompts used to generate the README file
inquirer.prompt([
  {
    type: 'input',
    message: 'What is the project title?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please provide a description of your project:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Please provide installation instructions for your project:',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Please provide usage instructions for your project:',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'Please choose a license for your application',
    name: 'license',
    choices: ['MIT License', 'GNU General Public License v3.0', 'BSD 2-Clause License'],
  },
  {
    type: 'input',
    message: 'What are the contribution guidelines?',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'What are the test instructions?',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
])

// Create the README file
.then((data) => {
  const filename = `sample-README.md`;
  const md = createREADME(data)

  fs.writeFile(filename, md, (err) =>
  err ? console.log(err) : console.log('Your README file has been successfully created!')
  );
});

// Get the badge associated with the selected license
function getBadge(license) {
  if (license == 'MIT License' ) {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license == 'GNU General Public License v3.0' ) {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
  } else {
    return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
  }
}

// Generate the README with Markdown
function createREADME(data) {
 return `
# ${data.title}

${getBadge(data.license)}

## Project Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

My GitHub profile: [https://github.com/${data.github}](https://github.com/${data.github})

Contact me via email: [${data.email}](mailto:${data.email})

 `
}