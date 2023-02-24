// Generate README file content based on user input
const generateMarkdown = (answers) =>
  `# ${answers.title}

  ${answers.description}

  ## Installation

  ## Usage

  ## Contributing

  ## Tests

  ## License`;

module.exports = generateMarkdown;
