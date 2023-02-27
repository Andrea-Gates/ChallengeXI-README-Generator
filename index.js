// Define all global requires
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

function getLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "GNU AGPLv3":
      return "[![License: AGPLv3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GPLv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "BSD 3":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "None":
      return "";
  }
}

// Inquirer prompt to ask user questions
inquirer
  .prompt([
    // questions here...
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter a title to continue.");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What is your GitHub username? (no @ needed)",
      name: "username",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("A valid GitHub username is required to continue.");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What what is the name of your GitHub repository? (no @ needed)",
      name: "repository",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter a valid repo name to continue.");
          return false;
        }
      },
    },
    // DESCRIPTION
    {
      type: "input",
      message: "Please provide a description of your project:",
      name: "description",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter a description to continue.");
          return false;
        }
      },
    },
    // INSTALLATION
    {
      type: "input",
      message: "How do you install your application?",
      name: "installation",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please answer to continue.");
          return false;
        }
      },
    },
    // USAGE
    {
      type: "input",
      message: "How do you use your application?",
      name: "usage",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please answer to continue.");
          return false;
        }
      },
    },
    // CONTRIBUTING
    {
      type: "input",
      message:
        "Can others contribute to your project, and if so, under what guidelines?",
      name: "contributing",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please answer to continue.");
          return false;
        }
      },
    },
    // TESTS
    {
      type: "input",
      message:
        "Can others provide any tests for your app, if so, please give examples?",
      name: "tests",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please answer to continue.");
          return false;
        }
      },
    },
    // LICENSE
    {
      type: "checkbox",
      message: "What license, if any, did you use for this repository:",
      choices: ["MIT", "GNU AGPL v3", "Perl", "Apache 2.0", "None"],
      name: "license",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please check an option to continue.");
          return false;
        }
      },
    },
  ])

  .then((answers) => {
    const readmePageContent = generateMarkdown(answers);
    const licenseBadge = getLicenseBadge(answers.license);

    fs.writeFile(
      "README.md",
      readmePageContent + "\n" + licenseBadge,
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("README file created successfully!");
        }
      }
    );
  });
