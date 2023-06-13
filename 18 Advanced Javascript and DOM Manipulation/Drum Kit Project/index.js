var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", playDrum);
}

function playDrum() {
    console.lof(this.innerHTML);
}



// function playDrum() {
    // var audio = new Audio('./sounds/tom-1.mp3');
    // audio.play();
// }



















// --------------------------------------------------------------------------------------
// Higher Order Functions (are functions that can take other functions as inputs)

// function add(num1, num2) {
    // return num1 + num2;
    // }

// function multiply(num1, num2) {
    // return num1 * num2;
// }

// function subtract(num1, num2) {
    // return num1 - num2;
// }

// function divide(num1, num2) {
    // return num1 / num2;
// }

// function calculator(num1, num2, operator) {
    // return operator(num1, num2);
// }

// calculator(4, 5, multiply);
// calculator(4, 5, add);

// debugger;
// shift enter
// calculator(4, 4, add);