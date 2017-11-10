var inquirer = require("inquirer");
var word = require("./construct-word.js");

var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

wordInPlay: null,
lettersOfTheWord: [],
matchedLetters: [],
guessedLetters: [],
guessesLeft: 0,
totalGuesses: 0,
letterGuessed: null,
wins: 0,

function setupGame() {
	var objKeys = Object.keys(Word.wordsToPick);
	this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];
	this.lettersOfTheWord = this.wordInPlay.aplit("");
	this.rebuildWordView();
	this.processUpdateTotalGuesses();
},

function updatePage() {
	if (this.guessesLeft === 0) {
		this.restartGame();
	} else {
		this.updateGuesses(letter);
		this.updateMatchedLetters(letter);
		this.rebuildWordView();
		if (this.updateWins() === true) {
			this.restartGame();
		}
	}
},

function wordGuess() {
	inquirer.prompt([
	  {
	    name: "menu",
	    type: "list",
	    message: "Great Bay Welcomes You",
	    choices: ["Post", "Bid"]
	  }
	]
	// ).then(function(inquirerResponse) {

	// });
},

function updateGuesses() {
    if ((this.guessedLetters.indexOf(letter) === -1) && (this.lettersOfTheWord.indexOf(letter) === -1)) {
      this.guessedLetters.push(letter);
      this.guessesLeft--;
      this.guessedLetters.join(", ");
    }
  },

function processUpdateTotalGuesses() {
	this.totalGuesses = this.lettersOfTheWord.length + 5;
    this.guessesLeft = this.totalGuesses;
},

function updateMatchedLetters() {
	for (var i = 0; i < this.lettersOfTheWord.length; i++) {
      if ((letter === this.lettersOfTheWord[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
        this.matchedLetters.push(letter);
        }
    }    
},

function rebuildWordView() {
    var wordView = ""
    for (var i = 0; i < this.lettersOfTheWord.length; i++) {
      if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) !== -1) {
        wordView += this.lettersOfTheWord[i];
      }
      else {
        wordView += "&nbsp;_&nbsp;";
      }
    }
},

function restartGame() {
	this.wordInPlay = null;
    this.lettersOfTheWord = [];
    this.matchedLetters = [];
    this.guessedLetters = [];
    this.guessesLeft = 0;
    this.totalGuesses = 0;
    this.letterGuessed = null;
    this.setupGame();
    this.rebuildWordView();
},

function updateWins() {
    var win;
    if (this.matchedLetters.length === 0) {
      win = false;
    }
    else {
      win = true;
    }
    for (var i = 0; i < this.lettersOfTheWord.length; i++) {
      if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) === -1) {
        win = false;
      }
    }
    if (win) {
      this.wins = this.wins + 1;
      return true;
    }
    return false;
  }
// pick random word (string)
// blank string for input with length of how many letters in word
// user guesses a letter
// if letter exists, mark correct and fill in the blank
// if not, guesses decrement and nothing else
// repeat until game is over/complete
// game over when guesses reach 0
// game won when all blanks filled


// number is used as index within array

// use underscore for each letter in word
// loop as many times as letters in word and add underscores each time

// input letter from keyboard
// if correct, print letter on the word's appropriate position
// if not correct, display decremented number of guesses
// determine if game is over

// check if blank string has anymore underscores/blanks
// if fails, check for amount of remaining guesses
// when guesses reach 0, game is over




// var index = Math.floor(Math.random())
// word[index]

// var blanks = ""
// for (i = 0; i < word.length; i++)
// blanks += "_"

// use inquirer to get user input
// if (word.includes(input))
// for (i = 0; i < word.length; i++)
// if (word[i] == input)
// blanks[i] = input
// else 
// guesses--
// check for endGame

// if (!blank.includes("_"))
// else if (guesses == 0)


// OLD CODE JUST IN CASE

// // Initialize the game when the page loads.
// hangmanGame.setupGame();

// // When a key is pressed..
// document.onkeyup = function(event) {
//   // Capture pressed key and make it lowercase.
//   hangmanGame.letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
//   // Pass the guessed letter into our updatePage function to run the game logic.
//   hangmanGame.updatePage(hangmanGame.letterGuessed);
// };
