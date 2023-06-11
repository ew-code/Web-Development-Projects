    === is equal to

    !== is not equal to

    > is greater than

    < is lesser than

    >= isgreater or equal to

    <= is lesser or equal to

{/* ------------------------------------------------------------------- */}
var a = 1;
var b = "1";

{/* zwróci nie bo a nie jest stringiem */}
if (a === b) {
    console.log("yes");
} else {
    console.log("no");
}

{/* zwróci tak, bo nie sprawdza typu danych */}
if (a == b) {
    console.log("yes");
} else {
    console.log("no");
}

WAŻNE:
Oba sprawdzają równość ale
 ten   === sprawdza też typy danych czy są zgodne
 a ten   == nie sprawdza typów danych
