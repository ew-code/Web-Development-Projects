// var myName = "Ewelina";
// myName = myName.toUpperCase();
// myName = myName.toLowerCase();

let name1 = prompt("What is your name? ");
var nameUp = name1.toUpperCase();
var nameStar = nameUp.slice(0,1);
var rest = name1.slice(1,30);
alert("Hello ," + nameStar + rest);

// let name2 = prompt("What is your name? ");
// var nameDo = name2.toLowerCase();
// var nameSt = nameDo.slice(1,30);
// var res = name2.slice(0,1);
// alert("Hello ," + res + nameSt);

//--------------------------------------------------------------------------
//SOLUTION
//1 Create a var that stores the name that user enters via prompt.
var name = prompt("What is your name? ");

//2 Capitalise the first letter of their name.

// a isolate the first char
var firstChar = name.slice(0, 1);

//b Turn the first char to upper case.
var upperCaseFirstChar = firstChar.toUpperCase();

//c Isolate the  rest of the name
var restOfName = name.slice(1, name.lenght);

//d  Change the rest of the name to lower case.
restOfName = restOfName.toLowerCase();

//e concactenate the first char with the rest of the char
var capitalisedName = upperCaseFirstChar + restOfName;

//3 We use the capitalised version of their name to greet them using an alert.
alert("Hello ," + capitalisedName);


