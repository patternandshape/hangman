function Word(word, wordLength, count) {
  this.word = word;
  this.wordLength = wordLength;
  this.letters = [];
  this.count = count;
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
  var lengthOfWord = this.wordLengthCalc();

    var result;
    var count = 0;
    var testword = this.word.split("");

    for (var i = 0; i < this.wordLength; i++) {
      if (testword.indexOf(testLetter) !== -1) {
        result = true;
      } else {
        result = false;
        this.count++;
      }
  };
  return result;
}
  // Word.prototype.failCount = function (){
  //           console.log(count);
  //   if (this.count === 6) {
  //     var failOutput = ("You lose, try again!");
  //   } else {
  //   }
  //   return failOutput;
  // }

Word.prototype.createBlanks = function(testWord) {
    var newPhrase = '';
    for (var i = 0; i < this.wordLength; i++) {
      console.log(newPhrase);
        newPhrase = newPhrase + "_ ";

    }
      return newPhrase;
    };

  var randomWord = function() {
  var words = ["koala", "wallaby", "sloth", "okapi", "ocelot", "capybara", "chinchilla", "crow", "chimpanzee", "toucan", "manatee"];
  var randomizedWord = words[Math.round( Math.random() * words.length - 1 )];
  return randomizedWord;
};

$(document).ready(function() {
  // $("form#hangmanStart").submit(function() {
  //   event.preventDefault();
    var newRandom = randomWord();
    var newWord = new Word(newRandom, newLength);
    var newLength = newWord.wordLengthCalc();
    console.log(newLength);

    var newBlanks = newWord.createBlanks(newLength);
    console.log(newWord);
    console.log(newBlanks);

    $(".blankSpaces").append(newBlanks);

});
