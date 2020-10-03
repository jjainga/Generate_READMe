//calling inquire to create prompts for ease of use
const inquirer = require("inquirer");
//Creating an array to store license's in 
const licenseList = []
//Creating a constructor so input licenses in an array.
function License(name, descritpion) {
    this.name = "name",
    this.descritpion = "description"
}
//Creating questions to loop through and add new licenses
const questions = ([
    {
        name: "licenseName",
        message: "What is the name of the License?",
        type: "input"
    },
    {
        name: "licenseDescription",
        messsage: "What is the license Descritpion?",
        type: "input"
    }
    {
        name: "askAgain",
        message: "Do you have another license to add?",
        type: "confirm",
        default: true
    }
])
//Creating functions to keep asking if there is more licenses to add
function addLicense() {
    inquirer.prompt(questions, function(answer) {
    const license = new License(answer.licenseName, answer.licenseDescription)   
        licenseList.push()
    })
    if (answer.askAgain) {
        addLicense();
    }
    else {
        console.table(licenseList);
    }
}
addLicense();
