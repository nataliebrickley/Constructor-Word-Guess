const Word = require("./word");
const inquirer = require("inquirer")
require('terminal-colors');
let wordPool = ["function", "variable", "language", "array", "object", "constant", "parameter", "hashtag", "number", "string", "boolean"]
let random = Math.floor(Math.random()*11)
let word = new Word(wordPool[random]);
let guessesMade = [];
word.displayWord()
let count = 10;
const play = function () {
    inquirer.prompt([
        {
            name: "guess",
            message: "Guess a letter!"
        }
    ]).then(function (response) {
        if (guessesMade.includes(response.guess)) {
            console.log("You already guessed that letter! Try Again.".red)
            play();
        }
        else {
            guessesMade.push(response.guess)
            word.guess(response.guess);
            word.displayWord()
            count--
            console.log((count + " guesses remaining").cyan)
            if (count > 0 && !word.solved) {
                play()
            }
            else if (word.solved) {
                console.log("CONGRATULATIONS! You Win!!!".yellow)
                newGame();
            }
            else {
                console.log("Sorry you ran out of guesses!".red)
                newGame();
            }
        }

    })
}
play();

const newGame = function() {
    inquirer.prompt([
        {
            type: "confirm",
            name: "restart",
            message: "Play Again?"
        }
    ]).then(function(response) {
        if(response.restart) {
            random = Math.floor(Math.random()*11);
            word = new Word(wordPool[random]);
            guessesMade = [];
            word.displayWord();
            count = 10;
            play();
        }
    })
}