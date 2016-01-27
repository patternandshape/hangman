function Word(word, length) {
  this.word = word;
  this.length = length;
  this.letters = [];
}

Word.prototype.wordInfo = function() {
  this.word = this.word.split("");
  console.log(this.word);
  return this.word;
}

var randomWord = function() {
  var words = ["koala", "wallaby", "sloth", "okapi", "ocelot", "capybara", "chinchilla", "crow", "chimpanzee", "toucan", "manatee"];
  var randomizedWord = words[Math.round( Math.random() * words.length - 1 )];
  return randomizedWord;
};

var getLength = function(userWord) {
  var wordLength = userWord.length;
  console.log(wordLength);
  return wordLength;
};

// var letterTest = function () {
//
// }
//
// var letterChooser = function() {
//
// var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//
// }

// for (i=0; i <= blankLength; i++) {
//
// }
