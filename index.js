let inquirer= require("inquirer")
let fs= require("fs")
let axios= require("axios")
const { report } = require("process")

//function takes array of objects and ask questions
inquirer.prompt([
    {
        type: "input",
        message: "what is the title of your project?",
        name:"title",
        default: "README Generator"
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name:"description",
        default: "this is a README"
    },
    {
        type: "input",
        message: "How is the project installed?",
        name:"installation",
    },
    {
        type: "input",
        message: "How is the usage?",
        name:"usage",
    },
    {
        type: "input",
        message: "How do you contribute to the project?",
        name:"contribution",
    },
    {
        type: "input",
        message: "What is the test command?",
        name:"test",
        default:"npm run test"
    },
    {
        type: "list",
        message: "Please enter the license that will be used",
        name: "licensing",
        choices: ["mit","isc","apache"]
    }

    //this funtion will return the responses
]).then(function(response) {
    let title=response.title;
    let description=response.description;
    let installation=response.installation;
    let usage=response.usage;
    let contribution=response.contribution;
    let test=response.test;
    let licensing=response.licensing;

//call the badge
    let query= `https://img.shields.io/badge/license-${licensing}-blue.svg`;
    
    
//fs lets you read and write file, append let you add to the file system in right order and restart the file
//writeFilesync will update the log
    fs.writeFileSync("README.md",`# ${title} \n\n`);
    fs.appendFileSync("README.md",`## Project Description \n\n`);
    fs.appendFileSync("README.md",`> ${description} \n\n`);
    fs.appendFileSync("README.md",`## Table of Content \n\n`);
    fs.appendFileSync("README.md",`## [1-Installations and Dependencies](#Installations) \n\n`);
    fs.appendFileSync("README.md",`## [2-Usage](#Usage) \n\n`);
    fs.appendFileSync("README.md",`## [3-Contribution](#Contribution) \n\n`);
    fs.appendFileSync("README.md",`## [4-Licensing](#Licensing) \n\n`);
    fs.appendFileSync("README.md",`## [5-Test](#Test) \n\n`);
    fs.appendFileSync("README.md",`## Installations \n\n`);
    fs.appendFileSync("README.md",`> ${installation} \n\n`);
    fs.appendFileSync("README.md",`## Usage \n\n`);
    fs.appendFileSync("README.md",`> ${usage} \n\n`);
    fs.appendFileSync("README.md",`## Contribution \n\n`);
    fs.appendFileSync("README.md",`> ${contribution} \n\n`);
    fs.appendFileSync("README.md",`## Licensing \n\n`);
    fs.appendFileSync("README.md",`<img src="${query}" alt="badge"/> \n\n`);
    fs.appendFileSync("README.md",`## Test \n\n`);
    fs.appendFileSync("README.md",`> ${test} \n\n`);

})
