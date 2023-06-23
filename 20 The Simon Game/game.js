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

function playSound(name) {
    var audio = new Audio(name);
    audio.play();
}

$(".btn").on("click", function () {
    let userChosenColour = $(this).attr("id");
    console.log(userChosenColour);
});

$(".btn").on("click", function () {
    playSound;
});