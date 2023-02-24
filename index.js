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
      name: "username",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter a repo name to continue.");
          return false;
        }
      },
    },
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

    // Add more questions here
  ])
  .then((answers) => {
    const readmeContent = generateMarkdown(answers);
    fs.writeFileSync("README.md", readmeContent);
    console.log("README generated successfully!");
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt could not be rendered in this environment.");
    } else {
      console.log("Something went wrong with inquirer prompt:", error);
    }
  });
