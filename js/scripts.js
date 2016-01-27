function Movie (movieTitle, runType, cost, time, age) {
  this.movieTitle = movieTitle;
  this.cost = cost;
  this.time = time;
  this.age = age;
  this.runType = runType;
}

Movie.prototype.movieInfo = function() {
  console.log(this.cost);
  return this.movieTitle + " ," + this.cost + " ,"  + this.time + " ," + this.age + " ," + this.runType;
}


function runProcessor(runType) {
  var testMovie = new Movie (movieTitle, runType);
  console.log(testMovie)
  if ($("#runCheck").prop("checked")) {
    if (this.movieTitle === "Carol" || "Room") {
      return this.runStatus === true;
    }
    else {
      return this.runStatus === false;
    }
  }
}

Movie.prototype.processPrice = function() {
  var runStatus = runProcessor(runStatus);

  if (this.runType === true) {
      if (this.time < 5){  //matinee
        if (this.age >= 65) { // senior discount
            return this.cost = 8;
        } else {
            return this.cost = 9;
        }
      } else {                // not matinee
        if (this.age >= 65) {  // senior discount
          return this.cost = 9;
        } else {
          return this.cost = 10;
        }
      }
    } else {
        if (this.time < 5){  //matinee
          if (this.age >= 65) { // senior discount
              return this.cost = 6;
          } else {
              return this.cost = 7;
          }
        } else {                // not matinee
          if (this.age >= 65) {  // senior discount
            return this.cost = 7;
          } else {
            return this.cost = 8;
          }
        }
    }
 }

$(document).ready(function() {
  $("form#new-ticket").submit(function(event) {
    event.preventDefault();
    var titleInput = $("input#new-title").val();
    var timeInput = $("input#new-time").val();
    var ageInput = $("input#new-age").val();
    var runInput = $("input#new-run").val();
    var newTicket = new Movie(titleInput, timeInput, ageInput, runInput);
    console.log(newTicket);
  });
  // $("ul#tickets").append("<li><span class='ticket'>" + newTicket.movieInfo() + "</span></li>");

});
