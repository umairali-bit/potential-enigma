//Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');



//Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([

    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: (value) => { if (value) { return true } else { return "please enter the title" }}
    },
    {
      type: 'input',
      name: 'about',
      message: 'Please describe your project? (Required)',
      validate: (value) => { if (value) { return true } else { return "please describe your project" }}
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How would you install the project?',
    

    },
    {
      type: 'input',
      name: 'usage',
      message: 'Describe the usage of this project:',
      
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please choose a license for the project: (Required)',
      choices: ['Apache-2.0', 'ISC', 'GPL-3.0', 'MIT', 'No License'],
      validate: (value) => { if (value) { return true } else { return "please choose a license" }}
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address: (Required)',
      validate: (value) => { if (value) { return true } else { return "please enter your email address" }}
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username: (Required)',
      validate: (value) => { if (value) { return true } else { return "please enter your GitHub username" }}
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Enter your email address, incase people want to contact you to contribute to this project',
      
    },
    {
      type: 'input',
      name: 'test',
      message: 'Please write a test for your application OR press enter to skip:',
      
    },

  ]);
};

//Create a function to initialize app
promptUser()
  .then(answers => {
    const pagemd = generateMarkdown(answers);
    fs.writeFile('./dist/readme.md', pagemd, err => {
      if (err) throw new Error(err);

      console.log('Markdown Generated!');
    });
  });












