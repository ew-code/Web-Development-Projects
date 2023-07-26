import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function dayCheck(req, res, next) {
    const d = new Date();
    let day = d.getDay();

    console.log(day);

    // const password = req.body["password"];
    // if (password === "ILoveProgramming") {
        // userIsAuthorised = true;
    // }
    next();
}


app.use(dayCheck);

app.get("/", (req, res) => {
    res.send(__dirname + "/public/index.html");
});

app.post("/", (req, res) => {
    if (week) {
        res.render(__dirname + "/views/index.ejs" , { name: req.body["name"]});
    } else {
        res.render(__dirname + "/views/index.ejs",{ name: req.body["name"] });
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});