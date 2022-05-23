const mongoose = require("mongoose");
const Order = require("../models/orders.model");
const Product = require("../models/products.model");
const User = require("../models/users.model");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

mongoose
  .connect(
    `mongodb+srv://admin:${process.env.DB_PASSWORD}@defaultcluster.bzvjf.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connected, and seeding DB");
  })
  .catch((err) => console.log(err));

const seedProudcts = [
  {
    productId: "1",
    productName: "Soy Milk",
    productPrice: "10",
    productCategory: "non-dairy",
  },
  {
    productId: "2",
    productName: "Apple",
    productPrice: "5",
    productCategory: "fruit",
  },
  {
    productId: "3",
    productName: "Oats Meal",
    productPrice: "4",
    productCategory: "grain",
  },
  {
    productId: "4",
    productName: "Apple Juice",
    productPrice: "13",
    productCategory: "Juice",
  },
];

const seedOrders = [
  {
    userId: 1,
    orderId: 1,
    productId: 1,
    orderItems: ["Apple", "Apple Juice"],
    orderTotal: "10",
  },
  {
    userId: 1,
    orderId: 2,
    orderTotal: "10",
  },
  {
    userId: 2,
    orderId: 3,
    orderTotal: "10",
  },
  {
    userId: 2,
    orderId: 4,
    orderTotal: "10",
  },
];

const seedUsers = [
  {
    userId: 1,
    email: "abc@gmail.com",
  },
  {
    userId: 2,
    email: "abcde@gmail.com",
  },
];

const seedAllDoc = async () => {
  await Product.deleteMany({});
  await Product.insertMany(seedProudcts);

  await User.deleteMany({});
  await User.insertMany(seedUsers);

  await Order.deleteMany({});
  await Order.insertMany(seedOrders);
};

seedAllDoc()
  .then(() => {
    mongoose.connection.close();
  })
  .then(() => console.log("finished seeding database!!!"));
