/*
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';

inquirer
    .prompt([
        {
            name: 'website address',
            message: 'Enter your website address',
            type: 'input'
        }])
    .then((answer) => {
        // Use user feedback for... whatever!!
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });

inquirer.prompt(question).then((answer) => {
    return fs.createWriteStream(JSON.stringify(answer, null, '  '));
});

var fs = require('qr-image');
function file(name) {
    return fs.createWriteStream(__dirname + '/' + name);
}

var qr = require('./../');
var text = answer;

qr.image(text, { type: 'png', ec_level: ec_level, parse_url: true, margin: 1 }).pipe(file('qr_t.png'));
fs.writeFileSync('qr_sync.png', qr.imageSync(text));