require("dotenv").config();
const express = require("express");
const app = express();
const fetch = require("node-fetch");
global.fetch = fetch;

const Unsplash = require("unsplash-js").default;
const toJson = require("unsplash-js").toJson;

const unsplash = new Unsplash({
  accessKey: process.env.ACCESS_KEY,
});

app.get("/", (req, res) => {
  unsplash.photos
    .getRandomPhoto({ query: "cat" })
    .then(toJson)
    .then((json) => {
      res.send(json);
    });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
