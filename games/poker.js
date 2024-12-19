// deck of cards (C, D, H, S)
const SUITS = ["\u2663", "\u2666", "\u2665", "\u2660"];
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"];

class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards;
  }

  get numberOfCards() {
    return this.cards.length;
  }

  shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      const oldValue = this.cards[newIndex];
      this.cards[newIndex] = this.cards[i];
      this.cards[i] = oldValue;
    }
  }
}

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

// default shuffle (C, D, H, S)
function freshDeck() {
  return SUITS.flatMap(suit => {
    return VALUES.map(value => {
      return new Card(suit, value);
    })
  })
}

// shuffle
const deck = new Deck();
deck.shuffle();

// display all cards
//console.log(deck.cards);

const player = [deck.cards[0], deck.cards[2]];
const dealer = [deck.cards[1], deck.cards[3]];
const flop = [deck.cards[5], deck.cards[6], deck.cards[7]];
const turn = deck.cards[9];
const river = deck.cards[11];


// display player hand
console.log(`Player hand: `);
console.log(player[0].value, player[0].suit);
console.log(player[1].value, player[1].suit);


// display community cards
setTimeout(() => {
  console.log(`\nFlop: `);
  console.log(flop[0].value, flop[0].suit);
  console.log(flop[1].value, flop[1].suit);
  console.log(flop[2].value, flop[2].suit);
}, 3000);

setTimeout(() => {
  console.log(`\nTurn: `);
  console.log(turn.value, turn.suit);
}, 8000);

setTimeout(() => {
  console.log(`\nRiver: `);
  console.log(river.value, river.suit);
}, 12000);

// display dealer hand
setTimeout(() => {
  console.log(`\nDealer hand: `);
  console.log(dealer[0].value, dealer[0].suit);
  console.log(dealer[1].value, dealer[1].suit);
}, 14000);