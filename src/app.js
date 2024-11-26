const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Welcome to test route");
});

app.listen(7777, () => {
  console.log("Server is listening to port 7777");
});
