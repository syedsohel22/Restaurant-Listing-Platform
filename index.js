const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const restaurantRouter = require("./routes/restaurant.routes");
// middleware
app.use(bodyParser.json());

app.use("/api/v1/restaurants", restaurantRouter);
// testing
app.get("/", (req, res) => {
  res.status(200).json({ message: "server is running" });
});

// For Error handling
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

// app listening
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(``);
});
