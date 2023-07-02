const fs = require('fs');

// const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile('message2.txt', "Hello from NodeJs!", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
}); 


// fs.writeFile(file, data[, options], callback)
// https://nodejs.org/dist/latest-v20.x/docs/api/fs.html#fswritefilefile-data-options-callback