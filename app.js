const profileDataArgs = process.argv.slice(2, process.argv.length);
// const name1 = profileDataArgs[0];
// const github = profileDataArgs[1];
//below does same thing
const [name, github] = profileDataArgs;
const fs = require('fs');
const generatePage = require('./src/page-template.js')


fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Porftolio Complete! Check out index.html to see the output!');
})