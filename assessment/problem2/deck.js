const Card = require("./card");
const { SUITS, RANKED_FACES } = require("./constants");
module.exports = class Deck {
    constructor() {
        let cards = new Array();
        for(let suit of SUITS) {
            for (let face of RANKED_FACES) {
                cards.push(new Card(suit, face));
            }
        }
        this.cards = cards;
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
          const newIndex = Math.floor(Math.random() * (i + 1))
          const temp = this.cards[newIndex]
          this.cards[newIndex] = this.cards[i]
          this.cards[i] = temp
        }
    }

    drawCards() {
        return this.cards.slice(0, 5);
    }
}
