import express from "express";
import bodyParser from "body-parser";
import dateFormat from "dateformat";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
let newItem = ""

app.get("/", (req, res) => {
    const fullDate = dateFormat("fullDate");

    res.render("index.ejs", { date: fullDate, newListItem: newItem });
    console.log(fullDate);
});

app.post("/", (req, res) => {
    newItem = req.body.newItem;
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});