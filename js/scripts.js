function Word(word, wordLength, letters, count) {   //constructor
  this.word = word;
  this.wordLength = wordLength;
  this.letters = letters;
  this.count = count;
  this.randomWords = ["koala", "wallaby", "sloth", "okapi", "ocelot", "capybara", "chinchilla", "crow", "chimpanzee", "toucan", "manatee"];
}

Word.prototype.hangman = function() {    //generating a random word
  var randomizedWord = this.randomWords[Math.round( Math.random() * this.randomWords.length - 1 )];
  return this.word = randomizedWord;
}

Word.prototype.wordInfo = function() {    //splitting word into array
  this.word = this.word.split("");
  return this.word;
}

Word.prototype.wordLengthCalc = function() {     //calculate word length
  this.wordLength = this.word.length;
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

Word.prototype.createBlanks = function(testWord) {   //creating initial word blanks on page load
    var newPhrase = '';
    for (var i = 0; i < this.wordLength; i++) {
        newPhrase = newPhrase + "_ ";
    }
      return newPhrase;
    };


Word.prototype.replaceBlanks = function(testLetter) {   //replacing letters on match (or not)
  var newPhrase = this.createBlanks(this.word);
  var newPhraseArr = newPhrase.split(" ");
  var wordSplit = this.word.split("");

  for (var i = 0; i < this.wordLength; i++) {
      if (testLetter === wordSplit[i]) {
        newPhraseArr[i] = testLetter;
        console.log(newPhraseArr);
        console.log(wordSplit[i]);
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
  });

    $("form#letterSubmission").submit(function(event) {
        event.preventDefault();
        var letterToTest = $("#letter-entry").val();
            var newWord = new Word();
        var newMatch = newWord.replaceBlanks(letterToTest, newLength);
        console.log(newMatch);
        console.log(newLength);
        $("p.blankSpaces").append(newMatch);



        var letterMatch = newWord.letterCheck(letterToTest);
        console.log(letterMatch);

  });





      // $(".letterKeyboard").on("click", function(event) {
      //   console.log("You clicked on: ", event.target);
      //   var name = $(event.target).closest(".btn");
      //   console.log("You clicked on:", name);
      //   var letterMatch = newWord.letterCheck(name);
      //   console.log(letterMatch);
      // });
});
