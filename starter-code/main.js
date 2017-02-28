// console.log("JS file is connected to HTML! Woo!") 

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/* if (cardThree === cardFour) {
  alert("You have a match!");
}
else {
  alert("Sorry, try again.");
} */


var createCards = function() {
  var gameBoard = document.getElementById('game-board');

  for (i = 0; i < 4; i++) {
    var newCard = document.createElement('div');
    newCard.className = 'card';
    gameBoard.appendChild(newCard);
  }
}

createCards();
