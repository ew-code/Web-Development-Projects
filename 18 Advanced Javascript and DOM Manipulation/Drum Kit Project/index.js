var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInner
        // switch statement
 switch (key) {
    case value:

        break;

    default:
        break;
 }

    });

}




// for (var i = 0; i < numberOfDrumButtons; i++) {
    // document.querySelectorAll(".drum")[i].addEventListener("click", playDrum);
// }

// function playDrum() {
    // var audio = new Audio('./sounds/tom-1.mp3'
    // audio.play();
// }
// --------------------------------------------------------------------------------------
// Javascript Object Example:

// var bellBoy1 = {
    // name: "Tim",
    // age: 19 ,
    // hasWorkPermit: true,
    // languages: ["Polish", "English"]
// }

// odwołanie do nazwy obiektu:
// bellBoy1.name

// Constructor Function: nazwa z duzej litery po tym poznajemy ze to funcja konstruktor

// function BellBoy (name, age, hasWorkPermit, languages) {
    // this.name = name;
    // this.age = age;
    // this.hasWorkPermit = hasWorkPermit;
    // this.languages = languages;
// }

// initialise Object:

// var bellBoy1 = new BellBoy("Tim", 19, true, ["Fremch", "English"]);

// var bellBoy1 = new BellBoy("Jim", 21, false, ["English", "German"]);

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