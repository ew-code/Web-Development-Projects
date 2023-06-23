const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = []

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)

    var audio = new Audio("./sounds" + randomChosenColour + ".mp3");
    audio.play();
}

$("#" + randomChosenColour).on("click", function () {
    $("h1").slideToggle();    //slideUp slideDown slideToggle
});