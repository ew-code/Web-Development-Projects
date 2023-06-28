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
  checkAnswer(gamePattern, userPattern);
});

function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColor[randomNumber];

  gamePattern.push(randomChosenColor);

  // Wyświetl guzik sekwencyjnie
  let i = 0;
  let interval = setInterval(function () {
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

function checkAnswer(pattern, userInput) {
  const len = pattern.length;

  if (len !== userInput.length) {
    // The lengths of the arrays don't match
    $("body").addClass("game-over")
    return false;
  }

  for (let i = 0; i < len; i++) {
    if (pattern[i] !== userInput[i]) {
      // The values at the same index don't match
      $("body").addClass("game-over");
      return false;
    }
  }
  nextSequence();
  return true;
}

// 
// function checkAnswer(currentLevel) {
  // 3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
  // if (gamePattern[currentLevel] === userPattern[currentLevel]) {
    // console.log("success");
    // 4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
    // if (userPattern.length === gamePattern.length) {
      // 5. Call nextSequence() after a 1000 millisecond delay.
      // setTimeout(function () {
        // nextSequence();
      // }, 1000);
    // }
// 
  // } else {
    // console.log("wrong");
    // $("body").addClass("game-over")
  // }
// }