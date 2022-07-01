const express = require("express");
const path = require("path");

const app = express();

const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));

app.set("view engine", "hbs");
app.get("/", (req, res) => {
    res.render("index");
  });
app.listen(4003, () => {
    console.log("server started on port 4003")
} );