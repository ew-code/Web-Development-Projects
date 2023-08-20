import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const numberOfLetters = fName + lName;

  res.render("index.ejs", {
    number: numberOfLetters,
  }
  );
});

app.post("/submit", (req, res) => {
  res.render("index.ejs",
    { name: req.body["fName"] }
  );
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
