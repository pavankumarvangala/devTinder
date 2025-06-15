const express = require("express");

const app = express();

app.get("/user/:userID", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Pawan", lastName: "Vangala" });
});

// app.post("/user", (req, res) => {
//   res.send("Data saved successfully to DB.");
// });

// app.delete("/user", (req, res) => {
//   res.send("User Deleted Successfully from DB.");
// });

// app.use("/test", (req, res) => {
//   res.send("from Test page");
// });

app.listen(7777, () => {
  console.log("Server is runnig on Port 7777..");
});
