function Word(word, wordLength) {
  this.word = word;
  this.wordLength = wordLength;
  this.letters = [];
}

Word.prototype.wordInfo = function() {
  this.word = this.word.split("");
  return this.word;
}

Word.prototype.wordLengthCalc = function() {
  this.wordLength = this.word.length;
  return this.wordLength;
}

Word.prototype.letterCheck = function(testLetter) {
  // var lengthOfWord = wordLengthCalc(lengthOfWord);
    var result;
    var testword = this.word.split("");

    for (var i = 0; i < this.wordLength; i++) {
      if (testword.indexOf(testLetter) !== -1) {
        result = true;
      } else {
        result = false;
      }
  };
      console.log(result);
  return result;
}

// function() {
//   "Cat"
// var guesses = [a, o, r, u, p, g, f]
//
// if (false = *6)
// you lost
// }
// else {
//   you good
// }


var randomWord = function() {
  var words = ["koala", "wallaby", "sloth", "okapi", "ocelot", "capybara", "chinchilla", "crow", "chimpanzee", "toucan", "manatee"];
  var randomizedWord = words[Math.round( Math.random() * words.length - 1 )];
  return randomizedWord;
};

// var getLength = function(userWord) {
//   var wordLength = userWord.length;
//   console.log(wordLength);
//   return wordLength;
// };

// var letterTest = function () {
//
// }
//
// var letterChooser = function() {
//

//
// }

// var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// for (i=0; i <= blankLength; i++) {
//
// }
