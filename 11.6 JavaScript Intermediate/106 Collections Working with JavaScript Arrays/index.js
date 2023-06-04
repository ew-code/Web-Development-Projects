var fruits = [aple, pinaple, strawbery, pear, bananna, lemon];
var myFruit = fruits[1];//pinaple
fruits.length; //6
fruits.includes(4); //return true or false


var guest = prompt("Enter your name:");
var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
var nameCheck = guestList.includes(guest);

if (nameCheck === true) {
    alert("Welcome");
} else {
    alert("Sorry,mabe next time");
}

// console.log(guestList.length);
// guestList[0];
