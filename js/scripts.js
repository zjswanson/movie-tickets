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

Ticket.prototype.getPrice = function() {
  var price= this.movie.basePrice;
  if (this.movieTime < 1600) {
    price = price - 2;
  }
  if (this.age === "senior") {
    price = price*.9;
  }else if(this.age === "child") {
    price = price *.8;
  }
  price= price.toFixed(2);
  return price;
};

var getMovie = function(title){
  var movie;
  if (title === "starWars") {
    movie = new Movie("Star Wars",10);
    return movie;
  } else if (title === "beaches") {
    movie = new Movie("Beaches",8);
    return movie;
  } else {
    movie = new Movie("Blade Runner",8);
    return movie;
  }
};

$(document).ready(function() {
  $("form#ticketForm").submit(function(event){
    event.preventDefault();
    var chooseMovie = $("select#movie").val();
    chooseMovie = getMovie(chooseMovie);
    var chooseTime = $("select#time").val();
    var chooseAge = $("select#age").val();
    var ticket = new Ticket (chooseMovie,chooseTime,chooseAge);
    console.log(ticket);
    console.log(ticket.getPrice());
    $(".output").empty();
    $(".output").append("<li>Your Movie: " + ticket.movie.movieTitle + "</li>");
    $(".output").append("<li>Your Show Time: " + ticket.movieTime+ " hours</li>");
    $(".output").append("<li>Your Ticket Price: $" + ticket.getPrice() + "</li>");
  });

});
