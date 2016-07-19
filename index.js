var deck_data = require('./text/cards.js')

var blackCards = deck_data.blackCards
var whiteCards = deck_data.whiteCards

shuffle(blackCards)
shuffle(whiteCards)

console.log("whiteCards:",whiteCards.length);
console.log("blackCards:", blackCards.length);

blackCards.forEach(function(blkCard){

  if(blkCard.pick == 1){

    var randomIndex =  Math.floor(Math.random() * ((whiteCards.length) - 0))
    var whtCard = whiteCards[randomIndex]

    console.log("Q: ",blkCard.text, "| A: ",whtCard);

  }




})

function shuffle(array) {
  // Fisher-Yates
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
