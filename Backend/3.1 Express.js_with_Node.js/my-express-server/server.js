const express = require('express');
const app = express();
const port = 3000;

app.get("/", function (req, res) {
    res.send("<h1>Hello Express.js!</h1>");
});

app.get("/contact", function (req, res) {
    res.send("Contact me at: eweli.wes@gmail.com");
});

app.get("/about", function (req, res) {
    res.send("About me : https://github.com/ew-code");
});

app.get("/hobbies", function (req, res) {
    res.send("I love to draw, gaming and creative coding");
});

app.listen(3000, function(){
    console.log("Server startet on port " + port);
});

// app.get('/', (req, res) => {
    // res.send('Hello World!');
// })

// app.listen(port, () => {
    // console.log(`Example app listening on port ${port}`);
// });

// app.get("/", function(request, response){
//     console.log(request);
    // response.send("Hello");
// });


// node server.js (to start)
// ctrl + C (stop)
// nodemon server.js ( nodemon start)

// https://expressjs.com/en/starter/hello-world.html