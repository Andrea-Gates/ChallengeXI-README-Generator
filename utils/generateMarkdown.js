function generateMarkdown(data) {
  return `
# ${data.title}

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## License

This project is licensed under the ${data.license} license.
`;
}

module.exports = generateMarkdown;
