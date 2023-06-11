function getRandomName(names) {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

// Example usage
const nameList = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
const randomName = getRandomName(nameList);
console.log(randomName);

// function whosPaying(names) {
//
    // /******Don't change the code above*******/
//
    // const randomIndex = Math.floor(Math.random() * names.length);
    // return names[randomIndex] + " is going to buy lunch today!";
//
    // /******Don't change the code below*******/
// }

function whosPaying(names) {

    /******Don't change the code above*******/
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch today!";

    /******Don't change the code below*******/
}

// const randomIndex = Math.floor(Math.random() * names.length);
// return names[randomIndex] + " is going to buy lunch today!";

// Kolejność if else ma znaczenie (działa jak przepływ wody)!

// programiści używają modulo % żeby sprawdzić czy dana liczba jest w całości podzielna przez inną liczbę (nie pozostawia reszty z dzielenia)

// console.log(guestList.length);
// guestList[0];
//
// var output = [];
// output.push(1); /zawsze dodaje element na końcu array
// output.pop; (zabierze ostatni element i go usunie)
//

