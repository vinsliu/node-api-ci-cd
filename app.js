const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/status", (req, res) => {
  res.json({ status: "API is running" });
});

module.exports = app;
