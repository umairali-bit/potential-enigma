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
    message: 'What is the title of your project',
    validate: (value)=>{if(value){return true} else {return "please enter the title"}}
  },
  {
    type: 'input',
    name: 'about',
    message: 'Please describe your project',
    validate: (value)=>{if(value){return true} else {return "please describe your project"}}
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How would you install the project',
    
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

]);
};

//Create a function to write README file

// const pagemarkDown = generateMarkdown(data);
  
//    fs.writeFile('readme.md', pagemarkDown, err => {
//   if (err) throw err;
  
//    console.log('Making Markdown');
// });

// // TODO: Create a function to initialize app
  promptUser()
  .then(answers => {
    const pagemd = generateMarkdown(answers);
  fs.writeFile('readme.md', pagemd, err => {
      if (err) throw new Error(err);

      console.log('Markdown Generated!');
    });
  });



// // Function call to initialize app









  

  
