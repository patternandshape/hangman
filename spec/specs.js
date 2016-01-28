describe('Word', function() {
    it("will produce a random word", function() {
        expect(randomWord()).to.be.a("string");
    });

    it("will gather the length of word", function() {
      var testSplit = new Word("Monkey");
      expect(testSplit.wordLengthCalc("Monkey")).to.equal(6);
    });

    it("will separate the word into letters" , function() {
      var testSplit = new Word("Monkey");
      expect(testSplit.wordInfo()).to.eql(["M", "o", "n", "k", "e", "y"]);
    });

    it("will check unmatching letter against a word", function() {
      var testLetter = new Word ("Cat", 3);
      expect(testLetter.letterCheck("e")).to.equal(false);
    });

    it("will check a matching letter against a word", function() {
      var testLetter = new Word ("Moot", 4);
      expect(testLetter.letterCheck("o")).to.equal(true);
    });

    it("will create underscores for each letter in a word", function() {
      var testBlanks = new Word ("Dog", 3);
      expect(testBlanks.createBlanks("Dog")).to.equal("_ _ _ ");
    });

    it("will replace underscores for each letter matching", function() {
      var testMatch = new Word("chimpanzee", 10);
      expect(testMatch.replaceBlanks("e")).to.equal("_ _ _ _ _ _ _ _ e e");
    });

    // it("will check a unmatching letter against a word", function() {
    //   var testLetter = new Word ("Shampoo", 7);
    //   expect(testLetter.letterCheck("e")).to.equal(false);
    // });

    // it("will replace a slot with a character when a matching letter is input", function() {
    //   var testHang = new Word ("Monday");
    //   expect(testHang("a")).to.equal("_");
    // });
    //
    // it("will add a hangman bodypart when letter isn't within word", function() {
    //   var testHang = new Word ("Monday");
    //   expect(testHang("e")).to.equal(false);
    //   expect(testHang("e")).to.equal("o");
    // });
});
