const { RANKED_FACES } = require("./constants");

module.exports = class PockerHand {
  // define hand is array of 5 cards
  constructor(hand) {
    this.hand = hand;
  }

  handRankingCategory() {
    const rankCount = this.rankCount();
    switch(true) {
      case this.isFlush() === true && this.isStraight() === "ROYALSTRAIGHT":
        return "Royal Flush";
      case this.isFlush() === true && this.isStraight() === "STRAIGHT":
        return "Straight Flush";
      case Object.keys(rankCount).find(key => rankCount[key] === 4):
        return "Four of a Kind";
      case Object.keys(rankCount).find(key => rankCount[key] === 3) && this.countPair() === 1:
        return "Full House";
      case this.isFlush() === true:
        return "Flush";
      case this.isStraight() === "STRAIGHT":
        return "Straight";
      case Object.keys(rankCount).find(key => rankCount[key] === 3):
        return "Three of a Kind";
      case this.countPair() === 2:
        return "Two Pair";
      case this.countPair() === 1:
        return "Pair";
      default:
        return "High Card";
    }
  }

  rankedHand() {
    let rankedHand = [];
    for (let i = 0; i < RANKED_FACES.length; i++) {
      for (let j = 0; j < this.hand.length; j++) {
        if (this.hand[j].face === RANKED_FACES[i]) {
          rankedHand.push(this.hand[j]);
        }
      }
    }
    return rankedHand;
  }

  rankCount() {
    let rankCount = {};
    this.hand.map(card => card.face).forEach((face) => {
      rankCount[face] = rankCount[face] ? rankCount[face] + 1 : 1;
    });
    return rankCount;
  }

  isFlush() {
    return this.hand.every(card => card.suit === this.hand[0].suit);
  }

  countPair() {
    const rankCount = this.rankCount();
    return Object.keys(rankCount).filter(face => rankCount[face] === 2).length;
  }

  isStraight() {
    const rankedHand = this.rankedHand(this.hand);
    const rankArray = rankedHand.map(card => card.face);
    let index = RANKED_FACES.indexOf(rankArray[0]);
    let expect = RANKED_FACES.slice(index, index + 5).join("");
    let current = rankArray.join("");
    if (current === "10JQKA" && current === expect) {
      return "ROYALSTRAIGHT";
    } else if (current === "A2345" || current === expect) {
      return "STRAIGHT";
    } else {
      return "FALSE";
    }
  }
}
