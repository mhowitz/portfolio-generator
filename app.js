
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHMTL = generatePage(name, github);

const inquirer = require('inquirer');


inquirer 
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => {
        console.log(JSON.stringify(answers));
    });


// fs.writeFile('./index.html', generatePage(name, github), err => {
//     if (err) throw err;

//     console.log('Porftolio Complete! Check out index.html to see the output!');
// })