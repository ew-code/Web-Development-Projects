const express = require("express");
const https = require("https");

const app = express();
const port = 3000;

//make get request to external server node -> https://www.twilio.com/blog/http-requests-in-node-js.html
//https://nodejs.org/api/https.html -> https://nodejs.org/api/https.html#httpsgeturl-options-callback
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    console.log("Post request recived.")
})

// const query = "Warsaw";
// const apiKey = "ad8e5204b70c5930d2d7d2b9298450f6";
// const unit = "metric";
// const url = "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=" + apiKey + "&q=" + query +"&units="+ unit +"";
// https.get(url, function (response) {
    // console.log(response.statusCode);
    // response.on('data', (d) => {
        // const weatherData = JSON.parse(d);
        // const temp = weatherData.list[0].main.temp;
        // const weatherDescription = weatherData.list[0].weather[0].description;
        // const icon = weatherData.list[0].weather[0].icon;
        // const imageURL = "https://openweathermap.org/img/wn/" + icon + ".png";
        // console.log(weatherData);
        // console.log(temp);
        // console.log(weatherDescription);
        // res.write("<p>The weather is currently</p> " + weatherDescription);
        // res.write("<h1>The temperature in Warsaw is " + temp + " degrees Celcius.</h1>");
        // res.write("<img src=" + imageURL + ">");
        // res.send()
        // const object = {
        // name: "Eweli",
        // favouriteFood: "Ramen"
        // }
        // console.log(JSON.stringify(object));
    // });
// });
// res.send("Server is up and running");
// ;
// 


app.listen(3000, function () {
    console.log("Server is running on port " + port);
});