const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {

    // console.log(req.body);
    weight = Number(req.body.weight);
    height = Number(req.body.height);
    result = weight + height;

    res.send("The result of the calculation is " + result);
});

app.listen(3000, function () {
    console.log("Server is running on port " + port);
});
