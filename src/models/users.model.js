const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date(),
  },
});
const User = mongoose.model("Users", userSchema);
module.exports = User;
