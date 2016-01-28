function Word(word, wordLength, letters, count) {   //constructor
  this.word = word;
  this.wordLength = wordLength;
  this.letters = letters;
  this.count = count;
  this.randomWords = ["koala", "wallaby", "sloth", "okapi", "ocelot", "capybara", "chinchilla", "crow", "chimpanzee", "toucan", "manatee"];
}

Word.prototype.hangman = function() {    //generating a random word
  var testArr = this.randomWords;
  this.word = testArr[Math.round( Math.random() * testArr.length - 1 )];
  return this.word;
}

Word.prototype.wordInfo = function() {    //splitting word into array
  this.word = this.word.split("");
  return this.word;
}

Word.prototype.wordLengthCalc = function() {     //calculate word length
  this.wordLength = (this.word).length;
  console.log(this.word);
  return this.wordLength;
}

Word.prototype.letterCheck = function(testLetter) {   //splitting word, checking for fails
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

Word.prototype.createBlanks = function() {   //creating initial word blanks on page load
    var newPhrase = '';
    for (var i = 0; i < this.wordLength; i++) {
        newPhrase = newPhrase + "_ ";
    }
      return newPhrase;
    };


Word.prototype.replaceBlanks = function(testLetter) {   //replacing letters on match (or not)
  var newPhrase = this.createBlanks();
  var newPhraseArr = newPhrase.split(" ");
  var wordSplit = this.word.split("");


  for (var i = 0; i < this.wordLength; i++) {
      if (testLetter === wordSplit[i]) {
        newPhraseArr[i] = testLetter;
      }
  }
    var newMatchPhrase = newPhraseArr.join(" ");
    return newMatchPhrase;
}

$(document).ready(function() {

  $("#start").click(function() {
    var newWord = new Word();
    var newRandom = newWord.hangman();
    var newLength = newWord.wordLengthCalc();
    var newBlanks = newWord.createBlanks();
    $(".blankSpaces").append(newBlanks);


    var letterToTest = $("#letter-entry").val();

    var newMatch = newWord.replaceBlanks(letterToTest, newLength);
    $("p.blankSpaces").append(newMatch);

    var letterMatch = newWord.letterCheck(letterToTest);
    console.log(letterMatch);

      $(".letterkey").click(function(event) {
        console.log("You clicked on: ", event.target);
        var name = this.id;
        console.log(this.id);

        var letterMatch = newWord.replaceBlanks(name);
        $(".blankSpaces").append(letterMatch);
      });
  });
});
