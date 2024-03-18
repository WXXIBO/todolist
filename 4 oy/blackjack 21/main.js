// Define card values
const cardValues = {
    '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
    'J': 10, 'Q': 10, 'K': 10, 'A': 11
  };
  
  // Function to create a deck of cards
  function createDeck() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks = Object.keys(cardValues);
    const deck = [];
    for (let suit of suits) {
      for (let rank of ranks) {
        deck.push({ rank, suit });
      }
    }
    return deck;
  }
  
  // Function to shuffle deck
  function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }
  
  // Function to deal a card
  function dealCard(deck) {
    return deck.pop();
  }
  
  // Function to calculate the total value of a hand
  function calculateHandValue(hand) {
    let sum = 0;
    let numAces = 0;
    for (let card of hand) {
      sum += cardValues[card.rank];
      if (card.rank === 'A') {
        numAces++;
      }
    }
    while (sum > 21 && numAces > 0) {
      sum -= 10;
      numAces--;
    }
    return sum;
  }
  
  // Function to check if a hand is a blackjack (21 with only 2 cards)
  function isBlackjack(hand) {
    return hand.length === 2 && calculateHandValue(hand) === 21;
  }
  
  // Main function to play the game
  function playBlackjack() {
    let deck = createDeck();
    shuffleDeck(deck);
    const playerHand = [dealCard(deck), dealCard(deck)];
    const dealerHand = [dealCard(deck), dealCard(deck)];
  
    console.log('Player hand:', playerHand);
    console.log('Dealer hand:', [dealerHand[0], 'Hidden']);
  
    if (isBlackjack(playerHand)) {
      console.log('Player has Blackjack!');
      return;
    }
  
    let playerTotal = calculateHandValue(playerHand);
    while (playerTotal < 21 && confirm('Do you want to hit?')) {
      playerHand.push(dealCard(deck));
      console.log('Player hand:', playerHand);
      playerTotal = calculateHandValue(playerHand);
    }
  
    if (playerTotal > 21) {
      console.log('Player busts! Dealer wins.');
      return;
    }
  
    console.log('Dealer hand:', dealerHand);
    let dealerTotal = calculateHandValue(dealerHand);
    while (dealerTotal < 17) {
      dealerHand.push(dealCard(deck));
      console.log('Dealer hits:', dealerHand);
      dealerTotal = calculateHandValue(dealerHand);
    }
  
    if (dealerTotal > 21 || dealerTotal < playerTotal) {
      console.log('Player wins!');
    } else if (dealerTotal > playerTotal) {
      console.log('Dealer wins.');
    } else {
      console.log('It\'s a tie!');
    }
  }
  
  // Run the game
  playBlackjack();
  