function isLeap(year) {

    if (year / 4 && year % 100) {
        return ("Leap year.");
    }

    if (year % 4 && year / 100 && year % 400) {
        return ("Not leap year.");
    }

    if (year / 400) {
        return ("Leap year.");
    }
}
