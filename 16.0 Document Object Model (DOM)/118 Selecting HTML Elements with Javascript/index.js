

document.getElementsByTagName("li") // złapie wszytkie elementy listy, a nie tylko jeden.Dlatego należy wskazać który element chcemy zmienić ->

document.getElementsByTagName("li")[2].style.color = "purple";

document.getElementsByTagName("li").length;



document.getElementsByClassName("btn")[0].style.color = "red";



document.getElementById("title").innerHTML = "Good Bye";


// pozwala na więcej , i najczęściej użwany
document.querySelector("h1");
document.querySelector("#title");
document.querySelector(".btn");
document.querySelector("li a");
document.querySelector("li.item");
document.querySelector("#list a");
document.querySelector("#list .item"); //zwróci tylko pierwszy element z listy
document.querySelectorAll("#list .item") //zwróci wszytkie elementy z listy
document.querySelectorAll("#list .item")[2];


document.querySelector("li a").style.color = "red";
