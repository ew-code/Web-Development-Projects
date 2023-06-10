// HTML content only
// CSS style websites
// Javascript is for behaviour

document.querySelector("button").classList; //zwraca listę klas przypisanych do danego elementu

//jak już mamy liste klas , to możemy użyć metod np. dla dodania kolejnej klasy do elementu

document.querySelector("button").classList.add("invisible");
// w ten sposób mozemy  trzymać style w CSS, ale mozemy je włączać i wyłączać używając JavaScriptu

document.querySelector("button").classList.remove("invisible");

document.querySelector("button").classList.toggle("invisible"); //jezeli klasa niewidoczności jest już zaimplemenowana to ją usuń, a jeżeli nie jest zaimplementwana to ją zaimplementuj.

document.querySelector("h1").classList.add("huge");