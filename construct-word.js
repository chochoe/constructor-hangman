var letter = require("./construct-letter.js");

wordInPlay: null,

function Word() {
 	var wordsToPick = ["jerome", "neena", "darion", "lou", "greg", "jordan", "jasmine", "stephen", "jacob", "adam", "rui", "luis"];
// Solution will be held here.
	var chosenWord = words[0];
	this.word = words[0];
	this.addLetter = function() {
		this.words.push(new Word());
	}
}

module.exports = Word;