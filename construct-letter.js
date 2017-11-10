function Letter() {
	var lettersInChosenWord = [];
// This will be the number of blanks we show based on the solution
	var numBlanks = 0;
// Holds a mix of blank and solved letters (ex: 'n, _ _, n, _').
	var blanksAndSuccesses = [];
// Holds all of the wrong guesses
	var wrongGuesses = [];
}

module.exports = Letter;