require("dotenv").config();
const express = require("express");
const app = express();
const fetch = require("node-fetch");
const morgan = require("morgan");
global.fetch = fetch;

const Unsplash = require("unsplash-js").default;
const toJson = require("unsplash-js").toJson;

const cors = require("cors");
app.use(cors());
app.use(morgan("dev"));
app.use(express.static("build"));

app.use((error, req, res, next) => {
  console.log("Error status: ", error.status);
  console.log("Message: ", error.message);

  res.status(error.status || 500);

  res.json({
    status: error.status,
    message: error.message,
    stack: error.stack,
  });
});

const unsplash = new Unsplash({
  accessKey: process.env.ACCESS_KEY,
});

app.get("/api/image", (req, res) => {
  unsplash.photos
    .getRandomPhoto({ query: "cat" })
    .catch((err) => {
      console.log("ERROR:", err);
    })
    .then(toJson)
    .then((json) => {
      res.send(json);
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
