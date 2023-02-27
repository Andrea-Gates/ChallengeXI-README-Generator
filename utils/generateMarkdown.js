const { default: Choice } = require("inquirer/lib/objects/choice");
const { default: Choices } = require("inquirer/lib/objects/choices");

// Generate README file content based on user input
const generateMarkdown = (answers) =>
  `# ${answers.title}

  ##### ${answers.logo}[${answers.userName}](${answers.GitHub})[Email Me](${
    answers.email
  })[Deployed application]()#### AcmeReadMeGenerator©2023 All Rights reserved. ${renderLicenseBadge(
    answers.license
  )} Free to Use, all material must be cited and credited.

  
## Table of Contents
[Description]${answers.description}
  ${answers.licenseBadge}
1. [About](#about)
    1. [User Story](#user%20story)
    2. [Acceptance criteria](#acceptance%20criteria)
    3. [Visuals](#visuals)
    4. [Build](#build)
2. [Installation](#installation)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Authors and acknowledgment](#authors%20and%20acknowledgment)

## About
  ${data.about}

## User Story
  

## Acceptance Criteria
  
  
## Visuals:
  ![]()

  ## [Installation] (#table-of-contents)

  ${data.installation}
  To clone the repo:
  
      git clone ${data.clone}
  

## License
  License used for this project - ${data.license}
  * For more information on license types, please reference this website
  for additional licensing information - [https: //choosealicense.com/](https://choosealicense.com/).


## Contributing:
  
  To contribute to this application, create a pull request.
  Here are the steps needed for doing that:
  - Fork the repo
  - Create a feature branch (git checkout -b NAME-HERE)
  - Commit your new feature (git commit -m 'Add some feature')
  - Push your branch (git push)
  - Create a new Pull Request
  Following a code review, your feature will be merged.


## [Tests] (#table-ofcontents)
  ${data.test}


## Authors and Acknowledgments
  ${data.author}
git 

## Contact Information:
* GitHub Username: ${data.userName}
* GitHub Email: ${data.userEmail}
  
`;

module.exports = generateMarkdown;
