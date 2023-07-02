// var generateName = require('sillyname');
import generateName from "sillyname";
import superheroes from "superheroes";

var sillyName = generateName();
var superheroName = superheroes.random();

console.log('My name is ' + sillyName);
console.log('My name is ' + superheroName);

// 1) npm init
// 2) npm instal
// 3) npm i module