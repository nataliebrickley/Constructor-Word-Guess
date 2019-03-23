const Letter = require("./letter");
require('terminal-colors');

const Word = function(word) {
    this.letters = [];
    let array = word.split("");
    for(let i=0; i<array.length; i++) {
        this.letters.push(new Letter(array[i]))
    }
    this.solved = false;
    this.displayWord = function() {
        let display = "";
        let underscore = 0;
        for(item in this.letters) {
            let character = this.letters[item].toString()
            if (character === "_") {
                underscore++
            }
           display += character + " "
        }
        console.log(display)
        //if none of the characters in the display are an underscore, the word has been guessed
        if(underscore === 0) {
            this.solved = true;
        }
    }
    this.guess = function(character) {
        
        //if character is in the word console correct:
        var found = false;
        for (let i=0; i<this.letters.length; i++) {
            this.letters[i].check(character)
            if(this.letters[i].string === character) {
                found = true;
            }
        }
        if (found) {
            console.log("Correct!".yellow)
        }
        else {
            console.log("Incorrect!".red)
        }

    }
}

module.exports = Word;