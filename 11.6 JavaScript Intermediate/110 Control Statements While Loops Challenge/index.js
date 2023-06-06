var i = 1;

while (i < 2) {
    console.log(i);
    i++;
}

DO SKORYGOWANIA!

var bottle = 99;
function beer() {

    while (bottle >= 1) {

        if (bottle <= 99) {
            console.log(bottle + " bottles of beer on the wall," + bottle + " bottles of beer.Take one down and pass it around, " + bottle + " bottles of beer on the wall.");
        }

        if (bottle === 1) {
            console.log(bottle + " bottle of beer on the wall,1 bottle of beer.Take one down and pass it around, no more bottles of beer on the wall.");
        }

        bottle--;
    }

    console.log("No more bottles of beer on the wall, no more bottles of beer.Go to th store and buy some more, 99 bottles of beer on the wall.");

}