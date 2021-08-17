// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//  function generateMarkdown(data) {
//    return `# ${data.title}

//  `;
//  }

 


module.exports = templateData => {
const { title, about, ...header } = templateData;
return `
# ${templateData.title} 
# Description 
 ${templateData.about}
# Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

# Installation 
 ${header.installation}

# Usage
 ${header.usage}

# Credits
${header.contribution}

# License
${header.license}

# Test
${header.test}

# Questions
For any questions, please feel free to reach out to me at the following:

Github: https://github.com/${header.github}
Email: ${header.email}

    
`;
  };

  

