// deck of cards (C, D, H, S)
const SUITS = ["\u2663", "\u2666", "\u2665", "\u2660"];
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"];

class Deck {
  // default to freshDeck
  constructor(cards = Deck.freshDeck()) {
    this.cards = cards;
  }

  get numberOfCards() {
    return this.cards.length;
  }

  // deal/burn one card
  deal() {
    return this.cards.pop();
  }

  // shuffle deck
  shuffle() {
    const numOfCards = this.numberOfCards
    for (let i = numOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      [this.cards[newIndex], this.cards[i]] = [this.cards[i], this.cards[newIndex]]
    }
  }

  static freshDeck() {
    return SUITS.flatMap(suit => VALUES.map(value => new Card(suit, value)));
  }
}

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

class Player {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
    this.hand = [];
    this.currentBet = 0;
    this.hasFolded = false;
  }
}

class Table {
  constructor() {
    this.players = [];
    this.handCards = 2; //cards per player
    this.communityCards = [];
    this.pot = 0;
    this.currentRound = 'pre-flop'; //"pre-flop" > "flop" > "turn" > "river"
  }
  
  // player
  addPlayer(name, balance) {
    this.players.push(new Player(name, balance));
  }

  get numberOfPlayers() {
    return this.players.length;
  }

  // deal cards
  dealHands() {
    // logic for dealing hands to players
    console.log(`Round: ${this.currentRound}`);
    for (let i = 0; i < this.handCards; i++) {
      for (let player of this.players) {
        if (deck.numberOfCards > 0) {
          player.hand.push(deck.deal());
        }
      }
    }
  }

  dealFlop() {
    // logic for dealing the flop
    this.nextRound();
    console.log(`Round: ${this.currentRound}`);
    deck.deal(); //burn a card
    for (let i = 0; i < 3; i++) {
      // add flop cards to communityCards
      this.communityCards.push(deck.deal());
    }
  } 

  dealTurn() {
    // logic for dealing the turn
    this.nextRound();
    console.log(`Round: ${this.currentRound}`);
    deck.deal(); //burn a card
    this.communityCards.push(deck.deal()); //add turn card to communityCards 
  }

  dealRiver() {
    // logic for dealing the river
    this.nextRound();
    console.log(`Round: ${this.currentRound}`);
    deck.deal(); //burn a card
    this.communityCards.push(deck.deal()); //add river card to communityCards
  }

  // display cards
  displayPlayerHands(){
    // display each player's hand
    for (const player of game.players) {
      console.log(`${player.name}'s hand:`);
      for(let i = 0; i < this.handCards; i++){
        console.log(`${player.hand[i].value} ${player.hand[i].suit}`); //log card as "A ♣"
      }
      console.log();
    }
  }

  displayCommunityCards(round) {
    if (round === "flop") {
      // display flop
      for (let i = 0; i < 3; i++) {
        console.log(`${this.communityCards[i].value} ${this.communityCards[i].suit}`); //log card as "A ♣"
      }
      console.log();
    } 
    else if (round === "turn") {
      // display turn
      for (let i = 3; i < 4; i++) {
        console.log(`${this.communityCards[i].value} ${this.communityCards[i].suit}`); //log card as "A ♣"
      }
      console.log();
    } 
    else if (round === "river") {
      // display river
      for (let i = 4; i < 5; i++) {
        console.log(`${this.communityCards[i].value} ${this.communityCards[i].suit}`); //log card as "A ♣"
      }
      console.log();
    }
  }

  // handle betting
  handleBet(player, amount) {
    // Update player balance and current bet
    // Update the pot
  }

  handleCall(player) {
    // Logic for handling a call
  }

  handleRaise(player, amount) {
    // Logic for handling a raise
  }

  handleFold(player) {
    player.hasFolded = true;
    // Additional logic for folding
  }

  nextRound() {
    // Logic for transitioning to the next round
    if (this.currentRound === "pre-flop") {
      return (this.currentRound = "flop");
    }
    else if (this.currentRound === "flop") {
      return (this.currentRound = "turn");
    }
    else if (this.currentRound === "turn") {
      return (this.currentRound = "river");
    }
    else if (this.currentRound === "river") {
      return (this.currentRound = "pre-flop");
    }
    else {console.log("invalid round name")}
  }

  // handle win
  evaluateHands() {
    // Logic for evaluating hands and determining the winner
  }
}

// GAME
const deck = new Deck(); //get a new deck of cards
deck.shuffle(); //shuffle the deck of cards
let game = new Table(); //console.log(deck.cards);

// add players(name, balance) to table {player limit: 9}
game.addPlayer("player", 1000);
game.addPlayer("dealer", 1000);

// deal player's hand
game.dealHands();
game.displayPlayerHands();

// deal communityCards
game.dealFlop();
game.displayCommunityCards("flop");
game.dealTurn();
game.displayCommunityCards("turn");
game.dealRiver();
game.displayCommunityCards("river");