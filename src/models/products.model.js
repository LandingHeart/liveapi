const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
  productId: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: String,
    required: true,
  },
  productCategory: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date(),
  },
});
const Products = mongoose.model("Products", productSchema);
module.exports = Products;
