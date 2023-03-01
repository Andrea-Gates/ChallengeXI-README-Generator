
# README Generator 4000

Based on JavaScript the README 4000 offers the next generation in CLIs,... for, um for generating a README file for a GitHub repository. It uses the inquirer package to prompt the user for input and the fs package to write the README file to the file system. To view a walkthrough of this bad boy in action, please go to: https://www.loom.com/share/985bd14e2d6343a5a275de1ac519d664/

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)

## Installation

The code can be forked or cloned from the GitHub repository, and is activated in the terminal by the command <node index.js>.

## Usage

The inquirer.prompt method is used to ask the user a series of questions about their project, including the project title, GitHub username and repository name, project description, installation instructions, usage information, contribution guidelines, testing instructions, and license type.

## Contributing

After the user answers the questions, the answers are passed to a function called generateMarkdown, which generates the actual README content based on the user's input.

## Tests

Finally, the README content and the license badge URL are written to a file called README.md using the fs.writeFile method. If the file is successfully written, a success message is logged to the console.

## License

This project is licensed under the Acme Corporation, which accepts no liability in case of spontaneous combustion or falling rocks. Do not use near open flames or desert highways.
