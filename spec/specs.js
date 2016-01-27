describe('Hangman', function() {
    // it("will setup an object for tickets", function() {
    //   var testTicket = new Movie("Carol", true, 10, 5, 40);
    //   expect(testTicket.movieTitle).to.equal("Carol");
    //   expect(testTicket.runType).to.equal(true);
    //   expect(testTicket.cost).to.equal(10);
    //   expect(testTicket.time).to.equal(5);
    //   expect(testTicket.age).to.equal(40);

    it("will produce a random word", function() {
        expect(randomWord()).to.be.a("string");
    });

    it("will gather the length of word", function() {
      expect(getLength("Wednesday")).to.equal(9);
    });

    it("will separate the word into letters" , function() {
      var testSplit = new Word("Monkey");
      expect(testSplit.wordInfo()).to.eql(["M", "o", "n", "k", "e", "y"]);
    });

    // it("allow user to choose a letter", function() {
    //     expect(Hangman("a")).to.equal("a");
    // });

    it("will check letter against a word", function() {
      var testword = new Word ("Moot");
      expect(Hangman("e")).to.equal(false);
    });

    // it("the space will remain blank and add a hangman bodypart above if the chosen letter is not within the word", function() {
    //   var testHang = new Word ("Monday");
    //   expect(testHang("e")).to.equal("_");
    // });
    //
    // it("will add a hangman bodypart when letter isn't within word", function() {
    //   var testHang = new Word ("Monday");
    //   expect(testHang("e")).to.equal(false);
    //   expect(testHang("e")).to.equal("o");
    // });
});
