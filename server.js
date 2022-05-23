const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 8080;
const db = mongoose.connection;
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/api", require("./src/index"));

const connectionURL = `mongodb+srv://admin:${process.env.DB_PASSWORD}@defaultcluster.bzvjf.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected to database!!!!!");
});
