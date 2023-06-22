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

$("button").on("click", function () {
    $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});

function makeSound(button) {

    switch (button) {
        case "blue":
            var blue = new Audio("./sounds/blue.mp3");
            blue.play();
            break;
        case "green":
            var green = new Audio("./sounds/green.mp3");
            green.play();
            break;
        case "red":
            var red = new Audio("./sounds/red.mp3");
            red.play();
            break;
        case "yellow":
            var yellow = new Audio("./sounds/yellow.mp3");
            yellow.play();
            break;
        case "wrong":
            var wrong = new Audio("./sounds/wrong.mp3");
            wrong.play();
            break;
        default: console.log(buttonInnerHTML);
            break;
    }
}