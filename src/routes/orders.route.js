const router = require("express").Router();
const { Order } = require("../models/orders.model");

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();

    res.json(products);
  } catch (err) {
    next(err);
    console.log("err message ", err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    next(err);
    console.log("err message ", err);
  }
});

router.post("/:id", async (req, res, next) => {
  try {
    const { id } = req.query;
    const product = await Product.findByPk(id);
  } catch (err) {}
});
