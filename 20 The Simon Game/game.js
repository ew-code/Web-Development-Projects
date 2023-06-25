const buttonColor = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickPattern = [];
let gameStarted = false;
let level = 0;

$(document).keypress(function () {
  if (!gameStarted) {
    $("#level-title").text("Level " + level);
    nextSequence();
    gameStarted = true;
  }
});

$(".btn").click(function () {
  let userChosenColor = $(this).attr("id");

  userClickPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer();
});

function nextSequence() {
  // userClickPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColor[randomNumber];

  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);

}

function playSound(soundFile) {
  let audio = new Audio("./sounds/" + soundFile + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(gamePattern, userClickPattern) {
  const len = gamePattern.length;

  if (len !== userClickPattern.length) {
    // The lengths of the arrays don't match
    return false;
  }

  for (let i = 0; i < len; i++) {
    if (gamePattern[i] !== userClickPattern[i]) {
      // The values at the same index don't match
      return false;
    }
  }

  return true;
}

console.log(checkAnswer(['red', 'blue', 'green'], ['red', 'blue', 'green']));
console.log(checkAnswer(['red', 'blue', 'green'], ['red', 'yellow', 'green']));