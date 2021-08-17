// // TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');



// // TODO: Create an array of questions for user input
 const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project'
  },
  {
    type: 'input',
    name: 'about',
    message: 'Please describe your project'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How would you install the project'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Describe usage of the project'
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Please choose a license for the project',
    choices: ['MIT', 'Apache License 2.0', 'Mozilla Public License 2.0']
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address'
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username'
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Who contributed to this project?'
  },
  {
    type: 'input',
    name: 'Test',
    message: 'Please write a test for your application'
  },

 ];

// TODO: Create a function to write README file
 function writeToFile(fileName, data) {   
   fs.writeFile('readme.md', (fileName,data), err => {
  if (err) throw err;
  
   console.log('Portfolio complete! Check out index.html to see the output!');
});}

// // TODO: Create a function to initialize app
 function init() {
   return inquirer.prompt(questions)
   .then(data => {
     writeToFile('README.md', generateMarkdown(data));

})
 }

// // Function call to initialize app
 init();








  

  
