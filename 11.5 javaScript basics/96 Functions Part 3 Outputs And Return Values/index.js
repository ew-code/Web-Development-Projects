// 2)

function getMilk(money, costPerBottle) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk");

    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    return calcChange(money, costPerBottle);
}

function calcBottles(startingMoney, costPerBottle); {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);

    return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;
    return change;
}

console.log("Hello, here is your change" + getMilk(10, 3) + "change.");


// 1)
// function getMilk(money) {
    // console.log("leaveHouse");
    // console.log("moveRight");
    // console.log("moveRight");
    // console.log("moveUp");
    // console.log("moveUp");
    // console.log("moveRight");
    // console.log("moveRight");
//
    // var numberOfBottles = Math.floor(money / 1.5);
//
    // console.log("buy milk " + numberOfBottles + " bottles of milk");
//
    // console.log("moveLeft");
    // console.log("moveDown");
    // console.log("moveDown");
    // console.log("moveLeft");
    // console.log("moveLeft");
    // console.log("enterHouse");
//
    // return money % 1.5;// Remainder of this devision.
// }
//
// var change = getMilk(4);
// console.log(change);
//
//

//---------------------------------------------
// --------------------------------------------
// example:
// function getMilk(money) {
    // return money % 1.5;
// }
//
// var change = getMilk(4);