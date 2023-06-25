const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

let gameStarted = false;
let level = 0;

$(document).keypress( function () {
  if (!gameStarted) {
    $("#level-title").text("Level " + level);
    nextSequence();
    gameStarted = true;
  }
});

$(".btn").on("click", function () {
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);

  // $("#level-title").text("Level " + level);
  // nextSequence();
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
  playSound(randomChosenColour);
}

function playSound(soundFile) {
  var audio = new Audio("./sounds/" + soundFile + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}
