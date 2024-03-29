import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();
    let type = "a weekday";
    let adv = "it's time to work hard";

    if (day === 0 || day === 6) {
        type = "the weekend";
        adv = "it's time to have some fun";
    }

res.render("index.ejs", {
                dayType: type,
                advice: adv,
            });
});



// function dayCheck(req, res, next) {
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
// const weekend = ["Sunday", "Saturday"];

// if (week.includes(day)) {
// res.send("Hey! It's a weekday, it's time to work hard!");
// } else if (weekend.includes(day)) {
// res.send("Hey! It's the weekend, it's time to have fun!");
// }
// next();
// }
// 
// app.use(dayCheck);
// 




// app.get("/", (req, res) => {
// res.render(__dirname + "/views/index.ejs",
// { name: req.body["dayCheck"] });
// });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});