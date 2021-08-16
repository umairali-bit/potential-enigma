// // TODO: Include packages needed for this application
//const fs = require('fs');
//const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');



// // TODO: Create an array of questions for user input
 const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  }
 ];

// // TODO: Create a function to write README file
//  function writeToFile(fileName, data) {   
//    fs.writeFile('index.html', generateMarkdown(name, github), err => {
//   if (err) throw err;
  
//    console.log('Portfolio complete! Check out index.html to see the output!');
//    });}

// // TODO: Create a function to initialize app
 function init() {
   return inquirer.prompt(questions)
   .then(answers => console.log(answers));

}

// // Function call to initialize app
 init();








  

  
