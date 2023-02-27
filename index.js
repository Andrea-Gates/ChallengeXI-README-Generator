// Define all global requires
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

console.log("Welcome to my README generator");
console.log("Please answer the following questions");

// Inquirer prompt to ask user questions
inquirer
  .prompt([
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
    const licenseBadge = renderLicenseBadge(answers.license);

    fs.writeFileSync("README.md", readmePageContent + "\n" + licenseBadge);
    console.log("README generated successfully!");
  });

function renderLicenseBadge(licenses) {
  let badges = "";
  for (const license of licenses) {
    if (license === "MIT") {
      badges += `![License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg) `;
    } else if (license === "GNU AGPL v3") {
      badges += `![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg) `;
    } else if (license === "Perl") {
      badges += `![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg) `;
    } else if (license === "Apache 2.0") {
      badges += `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg) `;
    }
  }
  return badges;
}
