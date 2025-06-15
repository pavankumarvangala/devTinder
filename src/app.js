const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
  res.send("From Hello page");
});

app.use("/test", (req, res) => {
  res.send("from Test page");
});

app.use((req, res) => {
  res.send("Hello from server");
});

app.listen(7777, () => {
  console.log("Server is runnig on Port 7777..");
});
