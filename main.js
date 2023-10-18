/* This is PSEUDOCODE for the "Pairs" game.
This is not intended to be legitimate JavaScript.
Authored by Arsalan Kazmi <arsalankazmi580@gmail.com>
This code MIGHT work, but is not intended to be used in production.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this pseudocode and associated documentation files (the "Pseudocode"), to
deal in the Pseudocode with minimal restriction, including without 
limitation the rights to use, copy, modify, merge, publish, distribute or 
sublicense.

You may not sell copies of the Pseudocode or use it in a production
environment.

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Pseudocode.
*/

class Game {
    constructor() {
        this.players = []
        this.current_player = 0
    }

    add_player(name) {
        this.players.push(new Player(name))
        this.current_player += 1
    }

    new_round(round) {
        const cards = initialize_game_board(round);
        this.players.forEach(player => player.reset());
    }
}

class Player {
    constructor(name) {
        this.name = name
        this.score = 0
        this.mistakes = 0
        this.moves = 0
    }

    reset() {
        this.score = 0
        this.mistakes = 0
        this.moves = 0
    }
}

class Card {
    constructor(id, color) {
        this.id = id
        this.color = color
        this.clicked = false
        this.visible = true
    }

    is_matching(card) {
        return this.color == card.color
    }
}

round = 1

base_color = "#7200cd" // Used for cards that haven't been clicked
base_card_count = 8

additional_card_count = round * 2
card_count = base_card_count + additional_card_count

var player = new Player("Player")
var cards = []
var pairs = []

for (var i = 0; i < card_count; i++) {
    cards.push(new Card(i, base_color))
}

function initialize_game_board(round) {
    const cards = [];
    const uniqueColors = generate_unique_colors(round);
    
    for (let i = 0; i < card_count; i++) {
        const color = uniqueColors[i % uniqueColors.length];
        cards.push(new Card(i, color));
    }
    
    shuffle(cards); // Shuffle the cards before distributing.
    
    return cards;
}

// Now I need to split the cards into groups of 2.
// And each pair of cards should have unique colours.

for (var i = 0; i < card_count; i++) {
    if (i % 2 == 0) {
        pairs.push(cards[i])
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Initialize the game using React.
class PairsGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game: new Game(),
        };
    }

    render() {
        // Your React components for the game board, player info, etc.
    }
}

// Render the PairsGame component in your application.
ReactDOM.render(<PairsGame />, document.getElementById('root'));
