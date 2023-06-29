const buttonColor = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userPattern = [];
let gameStarted = false;
let level = 0;

$(document).on("keydown", function (event) {
  if (!gameStarted) {
    $("#level-title").text("Level " + level);
    nextSequence();
    gameStarted = true;
  }
});

$(".btn").click(function () {
  let userChosenColor = $(this).attr("id");
  userPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userPattern.length - 1);
});

function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  $("h2").text("");
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColor[randomNumber];
  gamePattern.push(randomChosenColor);
  let i = 0;
  let interval = setInterval(function () { // Wyświetl guzik sekwencyjnie
    $("#" + gamePattern[i])
      .fadeIn(100)
      .fadeOut(100)
      .fadeIn(100);
    playSound(gamePattern[i]);

    i++;
    if (i >= gamePattern.length) {
      clearInterval(interval);
    }
  }, 1000);
  userPattern = []; // Wyczyść userPattern po wyświetleniu sekwencji
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userPattern[currentLevel]) {
    if (userPattern.length === gamePattern.length) {

      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    wrongAnswer();
    startOver();
  }
}

function wrongAnswer() {
  $("body").addClass("game-over");
  let wrong = new Audio("./sounds/wrong.mp3");
  wrong.play();
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);
  $("h1").text("Game Over, Press Any Key to Restart");
}

function startOver() {
  level = 0;
  gamePattern = [];
  gameStarted = false;
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

// function checkAnswer(pattern, userInput) {
  // const len = pattern.length;
//
  // if (len !== userInput.length) { // The lengths of the arrays don't match
    // wrongAnswer();
    // startOver();
    // return false;
  // }
  // for (let i = 0; i < len; i++) {
    // if (pattern[i] !== userInput[i]) { // The values at the same index don't match
      // wrongAnswer();
      // startOver();
      // return false;
    // }
  // }
  // nextSequence();
  // return true;
// }
