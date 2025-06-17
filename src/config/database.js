const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://pavankumarvangala:10WZvfxtVcy1Dx3O@namastenode.1mtfh.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
