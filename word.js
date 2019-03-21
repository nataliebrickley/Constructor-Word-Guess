const Letter = require("./letter");

const Word = function(word) {
    this.letters = [];
    let array = word.split("");
    //console.log(array)
    for(let i=0; i<array.length; i++) {
        this.letters.push(new Letter(array[i]))
    }
    this.displayWord = function() {
        let display = "";
        for(item in this.letters) {
           display += this.letters[item].toString() + " "
        }
        console.log(display)
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
            console.log("Correct!")
        }
        else {
            console.log("Incorrect!")
        }

    }
}

// let test = new Word("testing")
// test.guess('g')
// test.displayWord()

module.exports = Word;