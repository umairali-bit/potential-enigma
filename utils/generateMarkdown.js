// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'No License') {
        return ''
    } else if (license === 'Apache-2.0') {
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`

    } else if (license === 'ISC') {
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`

    } else if (license === 'GPL-3.0') {
        return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)

    `
    } else if (license === 'MIT') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

    }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'No License') {
        return ''

    } else if (license === 'Apache-2.0') {
        return `https://opensource.org/licenses/Apache-2.0`

    } else if (license === 'ISC') {
        return `https://opensource.org/licenses/ISC`

    } else if (license === 'GPL-3.0') {
        return `https://opensource.org/licenses/GPL-3.0`


    } else if (license === 'MIT') {
        return `https://opensource.org/licenses/MIT`
    }

}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderlicenseSection(license) {

    if (license === 'No License') {
        return ''

    } else if (license === 'Apache-2.0') {
        return `https://choosealicense.com/licenses/apache-2.0/`

    } else if (license === 'ISC') {
        return `https://choosealicense.com/licenses/isc/`

    } else if (license === 'GPL-3.0') {
        return `https://choosealicense.com/licenses/gpl-3.0/`

    } else if (license === 'MIT') {
        return `https://choosealicense.com/licenses/mit/`
    }
}



// Create a function to generate markdown for README
function generateMarkdown(templateData) {
    const { title, about, ...header } = templateData;
    return `
# ${templateData.title} ${renderLicenseBadge(header.license)}
# Description 
 ${templateData.about}
# Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)


# Installation 
 ${header.installation}

# Usage
 ${header.usage}

# Contributions

If you want to contribute to this project please reach me at 

${header.email}

# License
## ${header.license}
[Lisence Link](${renderLicenseLink(header.license)})

[Lisence Section](${renderlicenseSection(header.license)})

# Tests
${header.test}

# Questions
For any questions, please feel free to reach out to me at the following:

Github: https://github.com/${header.github}

Email: ${header.email}

    
`;
};

module.exports = generateMarkdown;

