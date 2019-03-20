const Letter = function(letter) {
    this.string = letter;
    this.boolean = false; 
    this.toString = function() {
        if(this.boolean) {
            return this.string
        }
        else {
            return "_"
        }
    };
    this.check = function(character) {
        if(character === this.string) {
            this.boolean = true;
        }
    }
}
let guess = new Letter("e")
//console.log(guess)
//console.log(guess.toString())
guess.check("e");
//console.log(guess.boolean)

module.exports = Letter;