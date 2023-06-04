var output = [];
var count = 1;
function fizzBuzz() {

    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    }

    if (count % 3 === 0) {
        output.push("Fizz");
    }

    else if (count % 5 === 0) {
        output.push("Buzz");
    }

    else {
        output.push(count);
    }

    count++;
    console.log(output);
}

// Kolejność if else ma znaczenie (działa jak przepływ wody)!

// programiści używają modulo % żeby sprawdzić czy dana liczba jest w całości podzielna przez inną liczbę (nie pozostawia reszty z dzielenia)

// console.log(guestList.length);
// guestList[0];

var output = [];
output.push(1); /zawsze dodaje element na końcu array
output.pop; (zabierze ostatni element i go usunie)


