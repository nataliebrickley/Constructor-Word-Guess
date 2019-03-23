const Letter = function(letter) {
    //store the letter
    this.string = letter;
    //the boolean is initially set to false, i.e. the letter has not been guessed
    this.boolean = false; 
    //create a function that returns an _ if the letter has not been guessed or returns the letter if it has been guessed.
    this.toString = function() {
        if(this.boolean) {
            return this.string
        }
        else {
            return "_"
        }
    };
    //create a function that checks if a character is equal to the letter
    this.check = function(character) {
        if(character === this.string) {
            this.boolean = true;
        }
    }
}

//export this file
module.exports = Letter;