let gamePattern = []
const buttonColours = ["red", "blue", "green", "yellow"];
let randomChosenColour;
let randomNumber;

function nextSequence() {
    randomNumber = Math.floor(Math.random() * 3);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
}

$("#blue").click(function () {
    $(this).fadeOut(100).fadeIn(100);
});

$("#yellow").click(function () {
    $(this).fadeOut(100).fadeIn(100);
});

$("#red").click(function () {
    $(this).fadeOut(100).fadeIn(100);
});

$("#green").click(function () {
    $(this).fadeOut(100).fadeIn(100);
});
