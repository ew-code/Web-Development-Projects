for (i = 0; i < 2; i++) {
    //Do something
}

i = 0 starting  point 
i < 2 end
i++ change

for (var i = 1; i < 2; i++) {
    console.log(i);
}


var output = [];
function fizzBuzz() {

    for(var count = 1; count <= 100; count++ ) {

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

    }
    console.log(output);
}


while checking for a state
 while (someting is true) {
    state //DO someting
}


for checking for iterration