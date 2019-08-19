import Deck from './../src/models/deck';
let deck = new Deck({"cards" : [{"face":"card-1"}, {"face":"card-2"}, {"face":"card-3"}, {"face":"card-4"}]});

describe("MyJSUtilities", function() {

  describe("Deck Utils", function() {

      it("should have array deck",function() {
        //console.log(deck.deck.cards.length)
        expect(deck.deck.cards.length).toBeGreaterThan(1);
      });
      it("should shuffle and return true or false",function() {
        let shuffle = deck.shuffle();
        //console.log(shuffle)
        expect(shuffle).toBeTruthy();
      });
      it("should draw and return one card",function() {
        let card = deck.draw();
        //console.log(card)
        expect(card).toBeDefined();
      });
      it("should return card count",function() {
        let nbCard = deck.getCardsCount();
        //console.log(nbCard)
        expect(nbCard).toBeDefined();
      });

  });

});
