const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema({
  userId: {
    type: Date,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  orderItems: [String],
  orderTotal: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
const Orders = mongoose.model("orders", orderSchema);
module.exports = Orders;
