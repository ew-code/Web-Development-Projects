
//Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
    });

}

//Detecting Keyboard Press

document.addEventListener("keydown", function(event) {
    makeSound(event.key);

})

function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        default: console.log(buttonInnerHTML);
            break;
    }
}

//notatki z wykładów ->

// addEventListener("keydown", function ()  {
// alert("Key was pressed");
// })

// KeyboardEvent.key

// Methods Metoda to funkcja która jest powiązana z obiektem

// function moveSuitcase {
    // alert("May U take your suitcase?");
    // pickUpSuitcase();
    // moveSuitcase();
// }

// var bellBoy1 = {
    // name: "Tim",
    // age: 19,
    // hasWorkPermit: true,
    // languages: ["Polish", "English"],
    // moveSuitcase: function () {
        // alert("May I take yur suitcase?");
        // picUpSuitcase();
        // move();
    // }
// }

// Constructor Function: nazwa z duzej litery po tym poznajemy ze to funcja konstruktor

// function BellBoy(name, age, hasWorkPermit, languages) {
    // this.name = name;
    // this.age = age;
    // this.hasWorkPermit = hasWorkPermit;
    // this.languages = languages;
    // this.moveSuitcase = function () {
        // alert("May I take your suitcase?");
        // picUpSuitcase();
        // move();
    // }
// }

// Odwołanie do metody(call Method)

// bellBoy1.moveSuitcase(); (jedyną różnicą miedzy metodą a właśnością (property) są nawiasy)
// -------------------------------------------------------------------------------------------------
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