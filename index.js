//imports:
const Word = require("./word");
const inquirer = require("inquirer")
require('terminal-colors');
//create an array of possible words
let wordPool = ["function", "variable", "language", "array", "object", "constant", "parameter", "hashtag", "number", "string", "boolean"]
//choose a random word from the array above
let random = Math.floor(Math.random()*11)
let word = new Word(wordPool[random]);
//create an array to keep trak of guesses made
let guessesMade = [];
//display the word in the terminal
word.displayWord()
//keep track of how many guesses we have left
let count = 10;
//create a function that lets the user play the game
const play = function () {
    //ask the user to guess a letter
    inquirer.prompt([
        {
            name: "guess",
            message: "Guess a letter!"
        }
    ]).then(function (response) {
        //notify the user if their guess has already been made
        if (guessesMade.includes(response.guess)) {
            console.log("You already guessed that letter! Try Again.".red)
            play();
        }
        //otherwise...
        else {
            //add the letter to their guesses made array
            guessesMade.push(response.guess)
            //run their reposnse through the word.guess function
            word.guess(response.guess);
            //update the word display
            word.displayWord()
            //decrement their number of remaining guesses
            count--
            console.log((count + " guesses remaining").cyan)
            //if they still have guesses left, keep playig
            if (count > 0 && !word.solved) {
                play()
            }
            //if the word has been solved, notify the user and ask if they want to start a new game
            else if (word.solved) {
                console.log("CONGRATULATIONS! You Win!!!".yellow)
                newGame();
            }
            //if there are no more guesses, ask the user if they want to play again
            else {
                console.log("Sorry you ran out of guesses!".red)
                newGame();
            }
        }

    })
}
//call the play function
play();

//create a function that will start a new game
const newGame = function() {
    inquirer.prompt([
        {
            type: "confirm",
            name: "restart",
            message: "Play Again?"
        }
    ]).then(function(response) {
        if(response.restart) {
            //pick a new word for the user to guess
            random = Math.floor(Math.random()*11);
            word = new Word(wordPool[random]);
            //resey guesses made, guesses left, display the new word, and start the game
            guessesMade = [];
            word.displayWord();
            count = 10;
            play();
        }
    })
}