const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
    // res.send('Hello World!');
// })

// app.listen(port, () => {
    // console.log(`Example app listening on port ${port}`);
// });

app.get("/", function (request, response) {
    console.log(request);
});

app.listen(3000, function(){
    console.log("Server startet on port ${port}");
});




// node server.js (to start)
// ctrl + C (stop)

// https://expressjs.com/en/starter/hello-world.html