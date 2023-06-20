$("h1").addClass("big-title margin-50"); //adding classes to element in jQuery
// $("h1").removeClass("big-title");
//
// $("h1").hassClass("big-title margin-50");//true false //sprawdzenie czy element daną klasę posiada
//
// $("button");
//
// $("h1").text("Bye"); //zmiana tekstu
//
// $("button").text("Don't Click Me");//wybiera wszytkie przyciski na stronie i zmienia ich tekst
//
// $("button").html("<em>Hey</em>"); //modyfikacja tekstu
//
// 156 Manipulating Attributes in jQuery
//
// $("img").attr("src");// dodawanie atrybutu (get and set)
// $("a").attr("href", "https://udemy.com"); //(get and set a jezeli drugi imput jest pusty to wyswietli istniejące)
//
// $("h1").attr("class"); // o ile element ma ustawioną jakąś klase to zostanie ona wyświetlona w konsoli
//
// 157  Adding Event Listeners with jQuery

// clickListener
// $("button").click(function () {
    // $("h1").css("color", "purple");
// });
// wybiera wszytkie guziki i nie trzeba używać for loop

// keydwn /keypressEvent
// $("input").keypress(function (event) {
    // console.log(event.key);
// });

// $("body").keypress(function (event) {
    // console.log(event.key);
// });

// zmieni h1 po kliknięciu przycisku na klawiaturze
// $(document).keypress(function (event) {
    // $("h1").text(event.key);
// });

// jakikolwiek event który bedzie w ()
// $(document).on("mouseover", function() {
    // $("h1").css("color", "purple");
// });

// 158 Adding and Removing Elements with JQuery

$("h1").before("<button>NEW</button>");