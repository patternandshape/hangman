describe('Movie', function() {
  it("will setup an object for tickets", function() {
    var testTicket = new Movie("Carol", true, 10, 5, 40);
    expect(testTicket.movieTitle).to.equal("Carol");
    expect(testTicket.runType).to.equal(true);
    expect(testTicket.cost).to.equal(10);
    expect(testTicket.time).to.equal(5);
    expect(testTicket.age).to.equal(40);
  });
});

describe('processPrice', function() {
  it("will give ticket price for carol matinee with senior discount", function() {
    var testMovie = new Movie("Carol", true, 10, 4, 65);
    expect(testMovie.processPrice()).to.equal(8);
  });
  it("will give ticket price for Room matinee with senior discount", function() {
    var testMovie = new Movie("Room", true, 10, 4, 65);
    expect(testMovie.processPrice()).to.equal(8);
  });
  it("will give ticket price for The Martian not a matinee with no senior discount", function() {
    var testMovie = new Movie("The Martian", false, 10, 10, 66);
    expect(testMovie.processPrice()).to.equal(7);
  });
  it("will give ticket price for The Revenants matinee with senior discount", function() {
    var testMovie = new Movie("The Revenants", false, 10, 4, 66);
    expect(testMovie.processPrice()).to.equal(6);
  });
});
