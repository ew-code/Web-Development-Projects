const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let gameStarted = false;
let level = 0;

$(document).keypress(function () {
    if (!gameStarted) {
        gameStarted = true;
        $("#level-title").text("Level " + level);
        nextSequence();
    }
});

function nextSequence() {
    level++;
    $("#level-title").text("Level " + level);

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour)
        .fadeIn(100)
        .fadeOut(100)
        .fadeIn(100);

    playSound("./sounds/" + randomChosenColour + ".mp3");
}

$(".btn").on("click", function () {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound("./sounds/" + userChosenColour + ".mp3");
    animatePress(userChosenColour);
});

function playSound(soundFile) {
    var audio = new Audio(soundFile);
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}
