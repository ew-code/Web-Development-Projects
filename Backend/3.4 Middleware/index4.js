import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  let street = String(req.body.street);
  let pet = String(req.body.pet);
  let result = street + pet;

  res.send("<h1>Your band name is: </h1>" + "<h2>" + result + "&#9996;</h2>");

  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
