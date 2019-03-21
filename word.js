const Letter = require("./letter");

const Word = function(word) {
    this.letters = [];
    let array = word.split("");
    console.log(array)
    for(let i=0; i<array.length; i++) {
        this.letters.push(new Letter(array[i]))
    }
    this.displayWord = function() {
        let display = "";
        for(item in this.letters) {
            display += this.letters[item] + " "
        }
        console.log(display)
    }
    this.guess = function(character) {
        for(item in this.letters) {
            this.letters[item].check(character)
        }
    }
}

let test = new Word("testing")
test.guess('t')
//console.log("test: " + test.letters)