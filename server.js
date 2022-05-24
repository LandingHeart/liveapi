const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 8080;
const db = mongoose.connection;
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./configs/.env") });

const connectToDB = require("./configs/connectToDB");

app.use(cors());
app.use(express.json());
app.use("/api", require("./src/index"));

connectToDB();

db.on("error", console.error.bind(console, "connection error: "));

db.once("open", function () {
  console.log("Connected to database!!!!!");
  app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
  });
});
