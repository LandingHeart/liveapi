const router = require("express").Router();
const { Product } = require("../models/products.model");

router.get("/", async (req, res, next) => {
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

router.put("/:id", async (req, res, next) => {
  const { id } = req.query;
  try {
  } catch (err) {
    next(err);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
});

module.exports = router;
