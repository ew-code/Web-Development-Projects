import express from "express";
import bodyParser from "body-parser";
import dateFormat from "dateformat";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    const fullDate = dateFormat("fullDate");

    res.render("index.ejs", { date : fullDate});
    console.log(fullDate);
});

app.post("/", (req, res) => {
    let newItem = req.body.newItem;
    res.render("index.ejs", { newListItem: newItem });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});