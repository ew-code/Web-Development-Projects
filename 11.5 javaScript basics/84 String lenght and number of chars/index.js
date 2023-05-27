let message = prompt("Wprowadż wiadomość (do 140 znaków):");
var number = message.length;
var charLeft = 140 - number;
alert("You have written " + number + " characters, you have " + charLeft + " characters left.");