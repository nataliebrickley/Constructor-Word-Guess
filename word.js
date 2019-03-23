//imports:
const Letter = require("./letter");
require('terminal-colors');
//create a word constructor that...
const Word = function(word) {
    //makes an array of all letters in the word
    this.letters = [];
    let array = word.split("");
    //run each letter through the Letter constructor
    for(let i=0; i<array.length; i++) {
        this.letters.push(new Letter(array[i]))
    }
    //initially, the word is not solved
    this.solved = false;
    // create a function that will display the word
    this.displayWord = function() {
        let display = "";
        //keep track of underscores
        let underscore = 0;
        //run each letter through the toString function, keeping track of how many underscores there are left
        for(item in this.letters) {
            let character = this.letters[item].toString()
            if (character === "_") {
                underscore++
            }
           display += character + " "
        }
        console.log(display)
        //if none of the characters in the display are underscores, the word has been guessed
        if(underscore === 0) {
            this.solved = true;
        }
    }
    //create a function that will see if the user guessed a correct letter or not
    this.guess = function(character) {
        //initially set found to false
        var found = false;
        //check the character against each letter in the word
        for (let i=0; i<this.letters.length; i++) {
            this.letters[i].check(character)
            //if the character is one of the letters, set found to true
            if(this.letters[i].string === character) {
                found = true;
            }
        }
        //if we found the letter in the word, we are correct
        if (found) {
            console.log("Correct!".yellow)
        }
        //otherwise we are incorrect
        else {
            console.log("Incorrect!".red)
        }
    }
}

//export the file
module.exports = Word;