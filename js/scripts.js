function Movie(movieTitle,basePrice) {
  this.movieTitle = movieTitle;
  this.basePrice = basePrice;
}

function Ticket(movieName,movieTime,age) {
  this.movie = movieName;
  this.movieTime = movieTime;
  this.age = age;
};

// Price formula: Set base price from first/second run, age and show time modify price.  First run = $10  Second run = $8.  Matinee is $2 off, Seniors 10% off, children 20% off.
var Beaches = new Movie("Beaches","1st");
var testTicket = new Ticket (Beaches,1100,"senior");

Ticket.prototype.getPrice(){
  var price= this.movie.basePrice;
  if (this.movieTime < 1600) {
    price = price - 2;
  }
  if (this.age === "senior") {
    price = price*.9;
  } if else (this.age === "child") {
    price = price *.8;
  }
  return price;
};


$(document).ready(function() {
  

});
