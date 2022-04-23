





// TODO: Include packages needed for this application
const inquirer = require('inquirer'); 
const generateReadme = require('./generate-file');
const {} = require ('./readme-template');

// TODO: Create an array of questions for user input
const promptReadmeData = readmeData => {
    console.log(`
    =================
        ReadMe 
    =================
    `)
  
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is the name of your Project *',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please put the name of your project');
                    return false;
                }
            }
        },

        {
            type: 'input', 
            name: 'about',
            message: 'tell the reader about this application',
            validate: aboutInput => {
                if(aboutInput) {
                    return true;
                } else {
                    console.log('Please put information about this application');
                    return false;
                }
            }
        },

        {
            type: 'checkbox',
            name: 'languages',
            message: 'what was the application built with?',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node', 'Next.js', 'React.js', 'Vue.js', 'Angular', 'Svelte', 'Laravel', 'Other']
        }, 

        {
            type: 'input',
            name: 'usage',
            message: 'What is the purpose of this application? *',
            validate: usageInput => {
                if(usageInput) {
                    return true;
                } else {
                    console.log("what is the use case for this application?");
                    return false;
                }
            }
        }

    ]);
}

promptReadmeData()
.then(readmeData => {
    return generateReadme(readmeData)
});



// TODO: Create a function to write README file
function writeToFile(fileName, data) {};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
