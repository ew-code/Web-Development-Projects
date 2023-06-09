
// 154 Manipulating Styles with jQuery
$("h1").addClass("big-title margin-50"); //adding classes to element in jQuery
$("h1").removeClass("big-title");

$("h1").hassClass("big-title margin-50");//true false //sprawdzenie czy element daną klasę posiada

$("button");


// 155 Manipulating Text with jQuery

$("h1").text("Bye"); //zmiana tekstu

$("button").text("Don't Click Me");//wybiera wszytkie przyciski na stronie i zmienia ich tekst

$("button").html("<em>Hey</em>"); //modyfikacja tekstu


// 156 Manipulating Attributes in jQuery

$("img").attr("src");// dodawanie atrybutu (get and set)

$("a").attr("href", "https://udemy.com"); //(get and set a jezeli drugi imput jest pusty to wyswietli istniejące)

$("h1").attr("class"); // o ile element ma ustawioną jakąś klase to zostanie ona wyświetlona w konsoli


// 157  Adding Event Listeners with jQuery

clickListener
$("button").click(function () {
    $("h1").css("color", "purple");
// });  wybiera wszytkie guziki i nie trzeba używać for loop

// keydwn /keypressEvent
$("input").keypress(function (event) {
    console.log(event.key);
});

$("body").keypress(function (event) {
    console.log(event.key);
});

// zmieni h1 po kliknięciu przycisku na klawiaturze
$(document).keypress(function (event) {
    $("h1").text(event.key);
});

// jakikolwiek event który bedzie w ()
$(document).on("mouseover", function() {
    $("h1").css("color", "purple");
});

// 158 Adding and Removing Elements with JQuery

$("h1").before("<button>NEW</button>");  //<button>New</button><h1>hello</h1>

$("h1").after("<button>NEW</button>"); // <h1>hello</h1><button>New</button>

$("h1").prepend("<button>NEW</button>"); // <h1><button>New</button>Hello</h1>  różnica między before a prepend - doda element w elemencie który wskazujemy przed just after opening tag

$("h1").append("<button>NEW</button>"); // <h1>Hello<button>New</button></h1> różnica miedzy affter a append - doda element po elemencie ktory wsazujemy just  before the end of the h1

$("button").remove();

// 159 Animations with jQuery

$("button").on("click", function () {
    $("h1").hide();
});

$("button").on("click", function () {
    $("h1").toggle();
});

$("button").on("click", function () {
    $("h1").fadeToggle();    //fadein fadeOut fadeToggle
});

$("button").on("click", function () {
    $("h1").slideToggle();    //slideUp slideDown slideToggle
});

$("button").on("click", function () {
    $("h1").animate({opacity: 0.5});    //custom animation ---- można dodawac tylko css rules które mają wartość numeryczną , nie mozna zmienić np. koloru.
});

$("button").on("click", function () {
    $("h1").slideUp().slideDown().animate({ opacity: 0.5 }); //wykona animacje w kolejności ich zapisu
});