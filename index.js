const Word = require("./word");
const inquirer = require("inquirer")

let word = new Word("testing");
word.displayWord()
let count = 10;
const play = function () {
    inquirer.prompt([
        {
            name: "guess",
            message: "Guess a letter!"
        }
    ]).then(function (response) {
        word.guess(response.guess);
        //console.log(response)
        word.displayWord()
        count --
        console.log(count + " guesses remaining")
        if (count > 0 && !word.solved) {
            play()
        }
        else if (word.solved){
            console.log("CONGRATULATIONS! You Win!!!")
        }
        else{
            console.log("Sorry you ran out of guesses!")
        }
        
    })
}
play();