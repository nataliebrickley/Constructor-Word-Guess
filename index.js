const Word = require("./word");
const inquirer = require("inquirer")

let word = new Word("testing");
word.displayWord()

inquirer.prompt([
    {
        name: "guess",
        message: "Guess a letter!"
    }
]).then(function(response){
    word.guess(response.guess);
    //console.log(response)
    word.displayWord()
})