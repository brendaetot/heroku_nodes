const express = require("express");
const path = require("path");

const{
  PORT=5400,
  NODE_ENV='development',
  


}=process.env;
const IN_PROD=NODE_ENV==='production';

const app = express();

const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));

app.set("view engine", "hbs");
app.get("/", (req, res) => {
    res.render("index");
  });
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
} );