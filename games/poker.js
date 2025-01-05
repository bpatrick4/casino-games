// POKER GAME
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

  // handle cards
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
    console.log(`\nRound: ${this.currentRound}`);
    deck.deal(); //burn a card
    for (let i = 0; i < 3; i++) {
      // add flop cards to communityCards
      this.communityCards.push(deck.deal());
    }
  } 

  dealTurn() {
    // logic for dealing the turn
    this.nextRound();
    console.log(`\nRound: ${this.currentRound}`);
    deck.deal(); //burn a card
    this.communityCards.push(deck.deal()); //add turn card to communityCards 
  }

  dealRiver() {
    // logic for dealing the river
    this.nextRound();
    console.log(`\nRound: ${this.currentRound}`);
    deck.deal(); //burn a card
    this.communityCards.push(deck.deal()); //add river card to communityCards
  }

  // handle displays
  displayPlayerHands(){
    // display each player's hand
    for (const player of game.players) {
      console.log(`-- Player: ${player.name} --`);
      console.log(`- Balance: $${player.balance}`);
      console.log(`- Hand:`);
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

  displayPot() {
    console.log(`-- Pot: $${this.pot} --`);
  }

  // handle bets
  handleBet(player, amount) {
    // Update player balance and current bet
    this.players[player].balance -= amount;
    this.players[player].currentBet = amount;
    this.currentBet = amount; //set base currentBet to the 
    console.log(`-- ${this.players[player].name} bet: $${this.players[player].currentBet} behind: $${this.players[player].balance} --`)

    // Update the pot
    this.pot += amount;
  }

  handleCall(player) {
    // Logic for handling a call
    this.players[player].balance -= this.currentBet;
    console.log(`-- ${this.players[player].name} called: $${this.currentBet} behind: $${this.players[player].balance} --`)

    // Update the pot
    this.pot += this.currentBet;
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

  // handle wins
  evaluateHands() {
    // Logic for evaluating hands and determining the winner
  }
}

// GAME
const deck = new Deck(); //get a new deck of cards
deck.shuffle(); //shuffle the deck of cards
let game = new Table(); //console.log(deck.cards);

// table blinds (in dollars, $)
const smallBlind = 25;
const bigBlind = 50;

// add players(name, balance) to table {player limit: 9}
game.addPlayer("alice", 1000);
game.addPlayer("bob", 1000);

// deal player's hand
game.dealHands();
game.displayPlayerHands();

// pre-flop betting
game.handleBet(0, smallBlind); //alice bets smallBlind
game.handleBet(1, bigBlind); //bob bets bigBlind
game.displayPot();

// deal flop
game.dealFlop();
game.displayCommunityCards("flop");

// flop betting
game.handleBet(0, smallBlind); //alice doubles smallBlind to stay
game.handleBet(1, 0); //bob bets 0
game.displayPot();

// deal turn
game.dealTurn();
game.displayCommunityCards("turn");

// turn betting
game.handleBet(0, 500); //alice bets 50
game.handleCall(1); //bob calls alice
game.displayPot();

// deal river
game.dealRiver();
game.displayCommunityCards("river");

// river betting
game.handleBet(0, 250); //alice bets 150
game.handleCall(1); //bob calls alice
game.displayPot();