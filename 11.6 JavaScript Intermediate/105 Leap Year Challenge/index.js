function isLeap(year) {

    if (year % 4 === 0) {
        if (year % 100 == 0) {
            if (year % 400 === 0) {
                return "Leap year.";
            } else {
                return "Not leap year."
            }
        } else {
            return "Leap year.";
        }
    } else {
        return "Not leap year.;"
    }
}

// 
// function isLeap(year) {
// 
    // if (year / 4 && year % 100) {
        // return ("Leap year.");
    // }
// 
    // if (year % 4 && year / 100 && year % 400) {
        // return ("Not leap year.");
    // }
// 
    // if (year / 400) {
        // return ("Leap year.");
    // }
// }
// 