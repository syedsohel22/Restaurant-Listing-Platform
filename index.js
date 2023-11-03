const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "server is running" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(``);
});