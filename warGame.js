/*
Coding Steps:
•	For the final project you will be creating an automated version of the classic card game WAR! There are many versions of the game WAR. In this version there are only 2 players.
o	You do not need to do anything special when there is a tie in a round.
•	Think about how you would build this project and write your plan down. Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include. 
o	You do not need to accept any user input, when you run your code, the entire game should play out instantly without any user input inside of your browser’s console.
The completed project should, when executed, do the following:
•	Deal 26 Cards to each Player from a Deck of 52 cards.
•	Iterate through the turns where each Player plays a Card.
•	The Player who played the higher card is awarded a point
o	Ties result in zero points for both Players
•	After all cards have been played, display the score and declare the winner.
•	Write a Unit Test using Mocha and Chai for at least one of the functions you write.
*/

/* Need to make a deck of 52 cards
    -Do I need to have suits?
    -How to give cards values?
How to create the runs that run automatically?
Create 2 players
Must play ALL cards to determine winner
Need to display the score for each player after all cards played
Need to declare player with highest score winner
DONT FORGET to run a chai mocha test on a function
*/

/*class Card { //create a card class that will initialize the suit and rank for the cards
    constructor (suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
}//not sure if I really need to make a card class or if I can just make a deck class

const suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];//declare string values for the suits in an array
const rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];//declare string values for the ranks in the array

console.log(suit);//prints all suits in the array suit
console.log(rank);//prints all ranks in the array rank

class Deck {
    constructor() {
        this.deck = [];

        for(let suit in suits) {
            for (let rank in ranks) {
                this.deck.push(`${ranks[rank]} of ${suits[suit]}`)
            }
        }
    }
}
    
const deck1 = new Deck ();//declares variable new deck
console.log(deck.deck1);//prints all 52 cards in deck with suit and rank
**this did not work, printed the suit and rank arrays but then creates infinite loop. Need to try this in a different WebAssembly.*/

class Deck {//create class for deck of cards blueprint
    constructor () {
        this.deck = [];//the deck will have values that are passed through this array

        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];//declare constant variable with array of string values for suits
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];//declare constant variable with array of string values for ranks

        for (let suit in suits) {
            for (let rank in ranks) {//for loop that iterates over each suit and each rank
              this.deck.push(`${ranks[rank]} of ${suits[suit]}`);//object that adds the suit of the card to the rank of the card culminating in a string
            }
          }
        }
      }
const deck1 = new Deck();//declare new constant variable for a deck of cards
console.log(deck1.deck);//prints all 52 cards in the deck
    


