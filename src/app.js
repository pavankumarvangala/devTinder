const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Naga",
    lastName: "vangala",
    emailId: "naga.vangala@gmail.com",
    password: "naga@123",
  });

  try {
    await user.save();
    res.send("User Added successfully!!!");
  } catch (err) {
    res.status(400).send("Bad request" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established!!!");
    app.listen(7777, () => {
      console.log("Server is runnig on Port 7777..");
    });
  })
  .catch((err) => {
    console.log(err + "Database connetion failed");
  });

const { adminAuth, userAuth } = require("./middlewares/auth");
