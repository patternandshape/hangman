function Word(word, wordLength, letters, count, blankList, result) {   //constructor
  this.word = word;
  this.wordLength = wordLength;
  this.letters = letters;
  this.count = count;
  this.randomWords = ["koala", "wallaby", "sloth", "okapi", "ocelot", "capybara", "chinchilla", "crow", "chimpanzee", "toucan", "manatee"];
  this.blankList = blankList;
  this.bodyParts = ["o", "/", "|", "'\''", "/", "''\'"];
  this.result = result;
  this.counter = 0;
}

Word.prototype.hangman = function() {    //generating a random word
  var testArr = this.randomWords;
  this.word = testArr[Math.round( Math.random() * testArr.length - 1 )];
  return this.word;
}

// Word.prototype.wordInfo = function() {    //splitting word into array
//   this.word = this.word.split("");
//   return this.word;
// }

Word.prototype.wordLengthCalc = function() {     //calculate word length
  var lengthTest = (this.word).length;
  this.wordLength = lengthTest;
  return this.wordLength;
}

Word.prototype.letterCheck = function(testLetter) {   //splitting word, checking for fails
  // var lengthOfWord = this.wordLengthCalc();


    var count = 0;
    var testword = this.word.split("");

    for (var i = 0; i < this.wordLength; i++) {
      if (testword.indexOf(testLetter) !== -1) {

      } else {

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
    this.blankList = '';
    for (var i = 0; i < this.wordLength; i++) {
        this.blankList = this.blankList + "_ ";
    }
      return this.blankList;
    };


Word.prototype.replaceBlanks = function(testLetter) {   //replacing letters on match (or not)
  var newPhrase = this.blankList;
  console.log(this.blankList);
  var newPhraseArr = newPhrase.split(" ");
  console.log(newPhraseArr);
  var wordSplit = this.word.split("");

  for (var i = 0; i < this.wordLength; i++) {
      if (testLetter === wordSplit[i]) {
        newPhraseArr[i] = testLetter;
        this.result = true;
      }
      else {
        this.result = false;

      }
  }
    this.blankList = newPhraseArr.join(" ");

    return this.blankList;
}

Word.prototype.bodyPartAdd = function() {    //generating a random word
  console.log(this.result);

  if (this.result === false) {
    var display = this.bodyParts[this.counter];
            this.counter++;

  }

  return display;
}



$(document).ready(function() {

  $(".start-btn").click(function() {
    var newWord = new Word();
    console.log(newWord);
    var newRandom = newWord.hangman();
    var newLength = newWord.wordLengthCalc();
    var newBlanks = newWord.createBlanks();
    $(".blankSpaces").append(newBlanks);


    // // var letterToTest = $("#letter-entry").val();
    // //
    // // var newMatch = newWord.replaceBlanks(letterToTest);
    // // $("p.blankSpaces").append(newMatch);
    //
    // var letterMatch = newWord.letterCheck(letterToTest);
    // console.log(letterMatch);
    // console.log(newWord);

      $(".letterkey").click(function(event) {
        console.log("You clicked on: ", event.target);
        var name = this.id;
        console.log(this.id);

        var letterMatch = newWord.replaceBlanks(name);
        $(".blankSpaces").empty().append(letterMatch);

        var bodyPart = newWord.bodyPartAdd();
        console.log(bodyPart);
        $(".manWhoHangs").append(bodyPart);
      });




  });
});
