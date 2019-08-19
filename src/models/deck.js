
export default class Deck {
    constructor (config) {
      this.deck = config;
    }

    shuffle () {
      if(this.deck.length < 1) return false;
      let deck = this.deck.cards;
      for(var j, x, i = deck.length; i; j = Math.floor(Math.random() * i), x = deck[--i], deck[i] = deck[j], deck[j] = x);
      this.deck = deck;
      return true;
      //return deck;
    }

    draw () {
      return this.deck.pop();
    }

    getCardsCount () {
      return this.deck.length;
    }
}

//exports.default = Deck.shuffle;
