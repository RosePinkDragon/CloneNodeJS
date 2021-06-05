const express = require("express");
const app = express();

app.listen(4000, () => {
  console.log(`listening on port 4000`);
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/sign-up", (req, res) => {
  res.render("sign-up");
});

app.use((req, res) => {
  res.status(404).render("404");
});
