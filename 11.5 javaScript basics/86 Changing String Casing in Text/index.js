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