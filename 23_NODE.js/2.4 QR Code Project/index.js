/*
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([{
        "message": "Type in your URL: ",
        "name": "URL"
    }
    ])
    .then((answers) => {
        // console.log(answers);
        const url = answers.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("gr_img.png"));
        fs.writeFile('URL.txt', url, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        }); 
    })
    .catch((error) => {
        if (error.isTtyError) {
        } else {
        }
    });







// inquirer
    // .prompt([
        // {
            // name: 'website address',
            // message: 'Enter your website address',
            // type: 'input'
        // }])
    // .then((answers) => {
        // console.log(JSON.stringify(answers, null, '  '));
//
    // })
    // .catch((error) => {
        // if (error.isTtyError) {
//
        // }
    // })
//
// var fs = require('qr-image');
// function file(name) {
    // return fs.createWriteStream(__dirname + '/' + name);
// }
//
// var qr = require('./../');
// var text = answers;
//
// qr.image(text, { type: 'png', ec_level: ec_level, parse_url: true, margin: 1 }).pipe(file('qr_t.png'));
// fs.writeFileSync('qr_sync.png', qr.imageSync(text));