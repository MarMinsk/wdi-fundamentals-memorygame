// console.log("JS file is connected to HTML! Woo!") 

/* var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king"; 

if (cardThree === cardFour) {
  alert("You have a match!");
}
else {
  alert("Sorry, try again.");
} 


var createCards = function() {
  var gameBoard = document.getElementById('game-board');

  for (i = 0; i < 4; i++) {
    var newCard = document.createElement('div');
    newCard.className = 'card';
    gameBoard.appendChild(newCard);
  }
} */


var cards = ['queen', 'queen', 'king', 'king']; // step 1
var cardsInPlay = []; // step 2
var board = document.getElementById('game-board');

function createBoard() {  //step 3 
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('div'); 
    cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]); //step 3
    cardElement.addEventListener('click', isTwoCards); //step 4
    board.appendChild(cardElement);
  }
}

function isMatch(cards){ // step 5 
  if (cards[0].getAttribute('data-card') === cards[1].getAttribute('data-card')) {
    alert("You have a match!");
  } else {
    alert("Sorry, try again.");
  }
}

function isTwoCards() { // step 6 - connected to step 4
  var cardClicked = this;  // var that links 'this' to 'data-card' attribute
  var typeOfCardClicked = cardClicked.getAttribute('data-card'); // created var for ease of reading
  cardsInPlay.push(cardClicked); 
  if (typeOfCardClicked === 'king') {
    cardClicked.innerHTML = '<img src="my-king.png" alt="King of Hearts" />'; // step 7 and 8
  } else {
    cardClicked.innerHTML = '<img src="my-queen.png" alt="Queen of Hearts" />'; 
  }

  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    setTimeout(function () { // step 9 - setting a timeout for 5 seconds to remove cards from array
      for (var i = 0; i < cardsInPlay.length; i++) {
        cardsInPlay[i].innerHTML = '';
      }
      cardsInPlay=[];
    }, 5000)
  }
}

createBoard();

