import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function dayCheck(req, res, next) {
    // const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const weekend = ["Sunday", "Saturday"];

    const d = new Date();
    let day = week[d.getDay()];

    if (week.includes(day)) {
        res.send("Hey! It's a weekday, it's time to work hard!");
    } else if (weekend.includes(day)) {
        res.send("Hey! It's the weekend, it's time to have fun!");
    }
    next();
}

app.use(dayCheck);

app.get("/", (req, res) => {
    res.render(__dirname + "/views/index.ejs");
});

app.post("/", (req, res) => {
    res.render(__dirname + "/views/index.ejs",
        { name: req.body["dayCheck"] });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});