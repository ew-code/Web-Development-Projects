const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound("./sounds/" + randomChosenColour + ".mp3");

}

function playSound(soundFile) {
    let audio = new Audio(soundFile);
    audio.play();
}

$(".btn").on("click", function () {
    let userChosenColour = $(this).attr("id");
    playSound("./sounds/" + userChosenColour + ".mp3");
    animatePress(userChosenColour);
    console.log(userChosenColour);

});

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}