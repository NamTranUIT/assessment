const Deck  = require("./deck");
const PockerHand = require("./poker-hand")

function startGame() {
    console.log("Start the poker game!");
    const deck = new Deck();
    console.log(`The application creates a standard deck of 52 playing cards, excluding jokers.\n`, deck.cards);
    deck.shuffle();
    console.log(`The deck is then shuffled.\n`, deck.cards);
    const getFirstFiveCards = deck.drawCards();
    console.log(`The application draws the first five cards from the deck\n`, getFirstFiveCards);
    const pokerHand = new PockerHand(getFirstFiveCards);
    const result = pokerHand.handRankingCategory();
    console.log(`The strongest poker hands is: `, result);
}

startGame();