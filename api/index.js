const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h2>Just Cat Imgs</h2>");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
