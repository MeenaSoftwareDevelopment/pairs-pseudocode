/// This is PSEUDOCODE for the "Pairs" game.
/// This is not intended to be legitimate JavaScript.
/// Authored by Arsalan Kazmi <arsalankazmi580@gmail.com>

base_color = "#7200cd" // Used for cards that haven't been clicked

color1 = "#ff0000"
color2 = "#00ffff"
color3 = "#0000ff"
color4 = "#ff00ff"
color5 = "#00ff00"

class Player {
    constructor(name) {
        this.name = name
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
    }

    is_matching(card) {
        return this.color == card.color
    }
}

time_remaining = 30
base_card_count = 5

function get_chosen_skill() {
    // just pretend there's a clickable button that opens a dropdown menu
    return skill
}

game_skill = "Easy"
switch (get_chosen_skill(game_skill)) {
    case "Easy":
        time_remaining = 30
        base_card_count = 5
        break
    case "Medium":
        time_remaining = 45
        base_card_count = 10
        break
    case "Hard":
        time_remaining = 60
        base_card_count = 20
        break
    case "Insane":
        time_remaining = 60
        base_card_count = 40
        break
    case "Stupid":
        time_remaining = 75
        base_card_count = 80
        break
    default:
        break
}

var player = new Player("Player")
var cards = []

for (var i = 0; i < base_card_count; i++) {
    cards.push(new Card(i, base_color))
}

function shuffle(array) {
    // Implement a shuffle function.
}

card.onclick() = function() {
    // Based on the card ID, change its colour
    check_cards_matching()
}

function check_cards_matching() {
    // If two cards in `cards` are the same ID and have been clicked,
    // make them disappear (non-visible).
}

// Oh yeah, this doesn't use React at all. Oops.