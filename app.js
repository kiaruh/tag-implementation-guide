const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");
const { send } = require("process");

app.use(express.static(path.resolve(__dirname, "./public")));

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () =>
  console.log("Server start http://localhost:" + app.get("port"))
);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views", "home.html"));
});

app.get("/checkout", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views", "checkout.html"));
});

app.get("/shop", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views", "shop.html"));
});

app.get("/about-us", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views", "about-us.html"));
});

app.get("/contact-us", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views", "contact-us.html"));
});

app.get("/confirmation", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views", "confirmation.html"));
});
app.get("/survey", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views", "survey.html"));
});
app.post("/survey", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views", "survey.html"));
});
app.get("/info", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views", "info.html"));
});

app.get("/confirmation", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views", "confirmation.html"));
});
