/*
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';

const question = [
    {
        type: 'input',
        name: 'url',
        message: "Enter your URL",
        default() {
            return 'https://github.com//';
        },
    },
];

inquirer.prompt(question).then((answers) => {
    return fs.createWriteStream(JSON.stringify(answers, null, '  '));
});

var fs = require('qr-image');
function file(name) {
    return fs.createWriteStream(__dirname + '/' + name);
}

var qr = require('./../');
var text = answers;

qr.image(text, { type: 'png', ec_level: ec_level, parse_url: true, margin: 1 }).pipe(file('qr_t.png'));
fs.writeFileSync('qr_sync.png', qr.imageSync(text));