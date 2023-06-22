let gamePattern = [randomChosenColour]
const buttonColours = ["red", "blue", "green", "yellow"];
let randomChosenColour;
let randomNumber;

function nextSequence() {
    randomNumber = Math.floor(Math.random() * 3);
    randomChosenColour = buttonColours[randomNumber];

}

$("#blue").click(function () {
    $(this).fadeOut(100).fadeIn(100);
});

// $("#yellow");
// $("#red");
// $("#green");

// fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);