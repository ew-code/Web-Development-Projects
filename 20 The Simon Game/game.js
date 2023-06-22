let gamePattern = [randomChosenColour]

const buttonColours = ["red", "blue", "green", "yellow"];

let randomChosenColour = buttonColours[randomNumber];

let randomNumber

function nextSequence() {
    // let randomNumber = $.random(0, 3);
    randomNumber = Math.floor(Math.random() * 3) + 1;
}